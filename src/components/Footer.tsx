import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">
              Your Name
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative solutions 
              and bringing ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:seralaghanjanuyan@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                seralaghanjanuyan@gmail.com
              </a>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://github.com/Januyan17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/seralagan-januyan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="section-divider" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Cypher_striX. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;