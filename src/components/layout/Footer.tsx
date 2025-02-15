import { Link } from "react-router-dom";

interface FooterProps {
  onCategoryFilter: (category: string) => void;
}

const Footer = ({ onCategoryFilter }: FooterProps) => {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12">
        {/* Flex container to distribute columns horizontally */}
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full md:w-1/3"> {/* Changed to 1/3 for equal distribution */}
            <h3 className="font-bold text-lg mb-4 font-general-sans">Build Learning Group</h3>
            <p className="text-muted-foreground">
              We are Singapore's first student incubator for tomorrow's innovators and leaders.
            </p>
          </div>
          <div className="w-full md:w-1/3"> {/* Changed to 1/3 for equal distribution */}
            <h3 className="font-bold text-lg mb-4 font-general-sans">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-muted-foreground hover:text-accent">
                  The Build Process™
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-accent">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3"> {/* Changed to 1/3 for equal distribution */}
            <h3 className="font-bold text-lg mb-4 font-general-sans">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@buildlearning.co</li>
              <li>Contact: (65) 8223 2551</li>
            </ul>
          </div>
        </div>
        {/* Bottom copyright section */}
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p> © Build Learning Group 2025. Program developed in Stanford University, USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
