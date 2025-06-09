
export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/186d10f7-591f-42a3-b0e4-31b5a42328fa.png" 
              alt="Guy Ashkenazi Logo" 
              className="h-6 w-auto"
            />
            <span className="text-lg font-bold text-white tracking-tight">GUY ASHKENAZI</span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="mailto:guy0204@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Guy Ashkenazi. All rights reserved. Premium custom t-shirts.
          </p>
        </div>
      </div>
    </footer>
  );
};
