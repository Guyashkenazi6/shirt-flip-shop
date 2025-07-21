
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
    const requestData = await req.json();
    console.log('=== EMAIL FUNCTION DEBUG ===');
    console.log('Full request data:', JSON.stringify(requestData, null, 2));
    console.log('Order number from request:', requestData.orderNumber);
    console.log('Type of orderNumber:', typeof requestData.orderNumber);
    console.log('==============================');
    
    const { orderNumber, orderData, cartItems, subtotal, shippingCost, total, discounts } = requestData;
    console.log('After destructuring - Order number:', orderNumber);

    // Use a proper table for order details for clear alignment
    const itemsTableHtml = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr>
            <th style="padding: 8px; text-align: left; border-bottom: 2px solid #ddd; font-weight: 600; color: #555;">Product</th>
            <th style="padding: 8px; text-align: center; border-bottom: 2px solid #ddd; font-weight: 600; color: #555;">Qty</th>
            <th style="padding: 8px; text-align: right; border-bottom: 2px solid #ddd; font-weight: 600; color: #555;">Price</th>
            <th style="padding: 8px; text-align: right; border-bottom: 2px solid #ddd; font-weight: 600; color: #555;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${cartItems.map(item => `
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #eaeaea; vertical-align: top;">${item.name} (${item.size}, ${item.color})</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #eaeaea; text-align: center; vertical-align: top;">${item.quantity}</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #eaeaea; text-align: right; vertical-align: top;">${item.price.toFixed(2)}₪</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #eaeaea; text-align: right; vertical-align: top;">${(item.price * item.quantity).toFixed(2)}₪</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    const summaryRows = [];
    summaryRows.push(`<tr><td style="padding: 4px 0;">Subtotal:</td><td style="text-align: right; padding: 4px 0;">${subtotal.toFixed(2)}₪</td></tr>`);

    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    if (shippingCost === 0 && itemCount >= 2) {
      summaryRows.push(`<tr><td style="padding: 4px 0; color: #22c55e;">Shipping:</td><td style="text-align: right; padding: 4px 0; color: #22c55e;">FREE <span style="font-size: 12px; color: #6b7280; font-weight: normal;">(2+ items)</span></td></tr>`);
    } else if (shippingCost > 0) {
      summaryRows.push(`<tr><td style="padding: 4px 0;">Shipping:</td><td style="text-align: right; padding: 4px 0;">${shippingCost.toFixed(2)}₪</td></tr>`);
    }

    if (discounts?.coupon?.amount > 0) {
      summaryRows.push(`<tr><td style="padding: 4px 0; color: #22c55e;">Discount (${discounts.coupon.code}):</td><td style="text-align: right; padding: 4px 0; color: #22c55e;">-${discounts.coupon.amount.toFixed(2)}₪</td></tr>`);
    }
    if (discounts?.bundleOffer > 0) {
      summaryRows.push(`<tr><td style="padding: 4px 0; color: #22c55e;">Bundle Offer (3+ items):</td><td style="text-align: right; padding: 4px 0; color: #22c55e;">-${discounts.bundleOffer.toFixed(2)}₪</td></tr>`);
    }

    summaryRows.push(`<tr style="font-weight: bold; border-top: 1px solid #ddd; font-size: 1.1em;"><td style="padding: 10px 0 0 0;">Total:</td><td style="text-align: right; padding: 10px 0 0 0;">${total.toFixed(2)}₪</td></tr>`);
    
    const summaryTableHtml = `<table style="width: 100%;">${summaryRows.join('')}</table>`;

    const customerInfoHtml = `
      <div style="line-height: 1.8;">
        <p style="margin: 0;"><strong style="display: inline-block; width: 90px; color: #555;">Name:</strong> ${orderData.fullName}</p>
        <p style="margin: 0;"><strong style="display: inline-block; width: 90px; color: #555;">Email:</strong> ${orderData.email}</p>
        <p style="margin: 0;"><strong style="display: inline-block; width: 90px; color: #555;">Phone:</strong> ${orderData.phone}</p>
        <p style="margin: 0;"><strong style="display: inline-block; width: 90px; color: #555;">Address:</strong> ${orderData.address}</p>
        <p style="margin: 0;"><strong style="display: inline-block; width: 90px; color: #555;">City:</strong> ${orderData.city}</p>
        <p style="margin: 0;"><strong style="display: inline-block; width: 90px; color: #555;">ZIP Code:</strong> ${orderData.zipCode}</p>
        <p style="margin: 0;"><strong style="display: inline-block; width: 90px; color: #555;">Notes:</strong> ${orderData.notes || 'N/A'}</p>
      </div>
    `;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border: 1px solid #ddd; border-radius: 8px;">
          <h1 style="color: #111; font-size: 24px; margin: 0 0 10px;">New Order Received!</h1>
          <p style="margin: 0 0 10px;">You've received a new order from <strong>${orderData.fullName}</strong>.</p>
          <p style="margin: 0 0 20px; font-weight: 600; color: #555;">Order Number: #${orderNumber || 'ERROR-NO-ORDER-NUMBER'}</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

          <h2 style="color: #111; font-size: 20px; font-weight: 600; margin: 25px 0 10px;">Order Details</h2>
          ${itemsTableHtml}

          <h2 style="color: #111; font-size: 20px; font-weight: 600; margin: 30px 0 10px;">Order Summary</h2>
          ${summaryTableHtml}

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          
          <h2 style="color: #111; font-size: 20px; font-weight: 600; margin: 25px 0 10px;">Customer Information</h2>
          ${customerInfoHtml}

        </div>
      </body>
      </html>
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
    console.error(`Error in send-order-email: ${err.message}`);
    return new Response(String(err?.message ?? err), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
})
