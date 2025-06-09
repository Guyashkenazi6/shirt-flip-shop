
export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/lovable-uploads/33b7cff0-db56-447b-b1ba-cc7434860d47.png" 
              alt="Guy Ashkenazi Logo" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-muted-foreground">
              Premium custom t-shirt designs.<br />
              Modern streetwear with artistic flair.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="text-muted-foreground space-y-2">
              <p>Email: info@guyashkenazi.com</p>
              <p>Delivery: 7-10 business days</p>
              <p>Free shipping on orders over ₪200</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Guy Ashkenazi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
