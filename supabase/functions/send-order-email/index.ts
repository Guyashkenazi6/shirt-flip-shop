
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderData, product, subtotal, shippingCost, total } = await req.json();

    const emailBody = `
      <h1>New Order from Guy Ashkenazi T-Shirts</h1>
      <p><strong>Product:</strong> ${product.name}</p>
      <p><strong>Size:</strong> ${orderData.size}</p>
      <p><strong>Quantity:</strong> ${orderData.quantity}</p>
      <hr>
      <p><strong>Subtotal:</strong> ₪${subtotal}</p>
      <p><strong>Shipping:</strong> ₪${shippingCost}</p>
      <p><strong>Total:</strong> ₪${total}</p>
      <hr>
      <h2>Customer Details:</h2>
      <p><strong>Name:</strong> ${orderData.fullName}</p>
      <p><strong>Email:</strong> ${orderData.email}</p>
      <p><strong>Phone:</strong> ${orderData.phone}</p>
      <p><strong>Address:</strong> ${orderData.address}</p>
      <p><strong>ZIP Code:</strong> ${orderData.zipCode}</p>
      <p><strong>Notes:</strong> ${orderData.notes || 'None'}</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Guy Ashkenazi Store <onboarding@resend.dev>",
      to: ["guy0204@gmail.com"],
      subject: `New T-Shirt Order - ${product.name}`,
      html: emailBody,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-order-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
