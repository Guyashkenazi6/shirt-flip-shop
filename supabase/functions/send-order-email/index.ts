
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { orderData, cartItems, subtotal, shippingCost, total, discounts } = await req.json();

    const itemsHtml = cartItems.map(item => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.name} (${item.size}, ${item.color})</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">₪${item.price.toFixed(2)}</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">₪${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `).join('');

    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const summaryRows = [];

    // Subtotal
    summaryRows.push(`
      <tr>
        <td style="padding: 5px 0;">Subtotal:</td>
        <td style="text-align: right; padding: 5px 0;">₪${subtotal.toFixed(2)}</td>
      </tr>
    `);

    // Shipping
    if (shippingCost === 0 && itemCount >= 2) {
      summaryRows.push(`
        <tr>
          <td style="padding: 5px 0;">Shipping:</td>
          <td style="text-align: right; padding: 5px 0; color: #22c55e; font-weight: bold;">FREE</td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: right; font-size: 12px; color: #6b7280; padding-bottom: 5px; line-height: 1;">Free shipping on 2+ items</td>
        </tr>
      `);
    } else {
      summaryRows.push(`
        <tr>
          <td style="padding: 5px 0;">Shipping:</td>
          <td style="text-align: right; padding: 5px 0;">₪${shippingCost.toFixed(2)}</td>
        </tr>
      `);
    }

    // Discounts
    if (discounts?.coupon?.amount > 0) {
      summaryRows.push(`
        <tr>
          <td style="padding: 5px 0; color: #22c55e;">Discount (${discounts.coupon.code}):</td>
          <td style="text-align: right; padding: 5px 0; color: #22c55e;">-₪${discounts.coupon.amount.toFixed(2)}</td>
        </tr>
      `);
    }
    if (discounts?.bundleOffer > 0) {
      summaryRows.push(`
        <tr>
          <td style="padding: 5px 0; color: #22c55e;">Bundle Offer (3+ items):</td>
          <td style="text-align: right; padding: 5px 0; color: #22c55e;">-₪${discounts.bundleOffer.toFixed(2)}</td>
        </tr>
      `);
    }

    // Total
    summaryRows.push(`
      <tr style="border-top: 1px solid #ddd; font-weight: bold;">
        <td style="padding: 10px 0 0 0;">Total:</td>
        <td style="text-align: right; padding: 10px 0 0 0;">₪${total.toFixed(2)}</td>
      </tr>
    `);

    const summaryHtml = `
      <h3 style="color: #444; margin-top: 20px; border-bottom: 2px solid #eee; padding-bottom: 5px;">Order Summary</h3>
      <table style="width: 100%; margin-top: 10px;">
        <tbody>
          ${summaryRows.join('')}
        </tbody>
      </table>
    `;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="color: #333;">New Order Received!</h1>
        <p>You've received a new order from <strong>${orderData.fullName}</strong>.</p>
        
        <h2 style="color: #444; border-bottom: 2px solid #eee; padding-bottom: 5px;">Order Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 10px; border-bottom: 2px solid #333; text-align: left;">Product</th>
              <th style="padding: 10px; border-bottom: 2px solid #333; text-align: center;">Quantity</th>
              <th style="padding: 10px; border-bottom: 2px solid #333; text-align: right;">Price</th>
              <th style="padding: 10px; border-bottom: 2px solid #333; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        ${summaryHtml}
        
        <h2 style="color: #444; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 30px;">Customer Information</h2>
        <p><strong>Name:</strong> ${orderData.fullName}</p>
        <p><strong>Email:</strong> ${orderData.email}</p>
        <p><strong>Phone:</strong> ${orderData.phone}</p>
        <p><strong>Address:</strong> ${orderData.address}, ${orderData.zipCode}</p>
        <p><strong>Notes:</strong> ${orderData.notes || 'N/A'}</p>
      </div>
    `;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'guy0204@gmail.com',
        subject: `New Order from ${orderData.fullName}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Resend API error:", errorBody);
      throw new Error(`Failed to send email: ${res.statusText}`);
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (err) {
    return new Response(String(err?.message ?? err), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
})
