
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ShippingAndReturnsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-24 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-shadow">Terms & Conditions</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-300">Shipping & Returns Policy</h2>
        
        <div className="max-w-4xl mx-auto space-y-12 text-muted-foreground">
          <section id="shipping">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">🚚 Shipping Policy</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>All orders will be shipped within 7 to 12 business days to the nearest post office to the address provided by the customer at checkout.</li>
              <li>We are not responsible for delays caused by external shipping companies, customs, or factors beyond our control.</li>
              <li>Please ensure that your shipping address is accurate to avoid delays or lost packages.</li>
            </ul>
          </section>

          <section id="returns">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">🔄 Returns & Exchanges Policy</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>We do not accept returns or exchanges for size-related issues. Each shirt is custom printed specifically for the customer. Please make sure to use the "Find Your Recommended Size" tool before placing your order. Enter your height and weight to receive an estimated size recommendation. Please note that this is only an estimate and not a guarantee.</li>
              <li>If the shirt arrives damaged and has not been worn, please take a clear photo of the defect and send it to us via one of our communication channels (email, WhatsApp, etc.).</li>
              <li>If we confirm that the issue is due to a production or shipping problem, the customer will need to cover the cost of shipping the item back to us. Once received, we will handle the next steps with you directly.</li>
            </ul>
          </section>
          
          <section id="notes">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">⚠️ Additional Important Notes</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Returns will not be accepted for items that show signs of wear, washing, or damage not caused by production or shipping.</li>
              <li>Any return requests must be made within 7 days of receiving the item.</li>
              <li>We reserve the right to deny any return or exchange that does not meet the above conditions.</li>
            </ul>
          </section>

          <section id="payment">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">💳 Payment Terms</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Payment must be completed before production or shipping begins. We are not responsible for any delays caused by incomplete or failed payment transactions.</li>
            </ul>
          </section>

          <section id="cancellation">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">❌ Order Cancellation Policy</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Orders cannot be cancelled or modified once production has started. Please review your order carefully before completing your purchase.</li>
            </ul>
          </section>

          <section id="liability">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">⚡ Limitation of Liability</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products or services.</li>
            </ul>
          </section>

          <section id="disclaimer">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">🎨 Disclaimer on Color and Print</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Please note that actual product colors and print placement may vary slightly from images shown on our website due to differences in display settings and production processes.</li>
            </ul>
          </section>

          <section id="privacy">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">🔒 Privacy and Data Use</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Customer data is handled according to our Privacy Policy. By placing an order, you consent to our use of your data for order processing and communication.</li>
            </ul>
          </section>

          <section id="force-majeure">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">🌪 Force Majeure</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>We are not responsible for delays or failure to fulfill orders due to events beyond our control, including natural disasters, strikes, or disruptions in supply chains.</li>
            </ul>
          </section>

          <section id="jurisdiction">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">⚖️ Jurisdiction and Governing Law</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>These terms are governed by the laws of Israel. Any disputes will be resolved under the exclusive jurisdiction of the courts of Israel.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingAndReturnsPage;
