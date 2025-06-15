
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Instagram } from "lucide-react";

const ConnectPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0fc157e6-7db0-49ee-8033-b272a9797a03.png" 
              alt="Guy Ashkenazi Logo" 
              className="h-16 w-auto mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Connect With Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch for custom designs, questions, or collaborations
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/972546742982"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                <p className="text-gray-300">+972 54 674 2982</p>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/Guy__ashkenazi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <Instagram className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">Instagram</h3>
                <p className="text-gray-300">@Guy__ashkenazi</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:guy0204@gmail.com"
              className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform text-2xl">
                ✉
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-300">guy0204@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">About Guy Ashkenazi</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Premium custom t-shirt designs combining modern streetwear with artistic flair. 
              Each piece is carefully crafted to make a statement while maintaining the highest quality standards.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>
                <strong className="text-white">Location:</strong> Israel
              </div>
              <div>
                <strong className="text-white">Shipping:</strong> Worldwide
              </div>
              <div>
                <strong className="text-white">Delivery:</strong> 7-10 business days
              </div>
              <div>
                <strong className="text-white">Quality:</strong> Premium cotton blend
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConnectPage;
