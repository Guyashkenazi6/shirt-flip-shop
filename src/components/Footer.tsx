
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div
            className="flex items-center space-x-3 mb-4 md:mb-0 cursor-pointer"
            onClick={scrollToTop}
          >
            <img 
              src="/lovable-uploads/f621a571-f1d0-485b-a45c-1f762898efee.png" 
              alt="AG Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="mailto:guy0204@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://www.instagram.com/Guy__ashkenazi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
            <a 
              href="https://wa.me/972546742982" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              WhatsApp
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
