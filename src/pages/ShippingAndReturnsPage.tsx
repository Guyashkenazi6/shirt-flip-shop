
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ShippingAndReturnsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-24 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-shadow">Shipping & Returns Policy</h1>
        
        <div className="max-w-4xl mx-auto space-y-12 text-muted-foreground">
          <section id="shipping">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">🚚 Shipping Policy</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>All orders will be shipped within 7 to 10 business days to the nearest post office to the address provided by the customer at checkout.</li>
              <li>We are not responsible for delays caused by external shipping companies, customs, or factors beyond our control.</li>
              <li>Please ensure that your shipping address is accurate to avoid delays or lost packages.</li>
            </ul>
          </section>

          <section id="returns">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-border pb-4">🔄 Returns & Exchanges Policy</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>We do not accept returns or exchanges for size-related issues. Each shirt is custom printed specifically for the customer. Please make sure to use the “Find Your Recommended Size” tool before placing your order. Enter your height and weight to receive an estimated size recommendation. Please note that this is only an estimate and not a guarantee.</li>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingAndReturnsPage;
