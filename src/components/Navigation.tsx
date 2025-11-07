
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-layered z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group perspective-container">
            <img 
              src="/gromo-logo.png" 
              alt="Gromo Logo" 
              className="w-8 h-8 transition-transform group-hover:scale-110 group-hover:rotate-3 drop-shadow-md"
            />
            <span className="text-xl font-bold text-gray-900 gradient-text">Gromo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/why-us"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/why-us") ? "text-primary" : "text-gray-700"
              }`}
            >
              Why Us
            </Link>
            <Link
              to="/offers"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/offers") ? "text-primary" : "text-gray-700"
              }`}
            >
              Offers
            </Link>
            <Link
              to="/instagram"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/instagram") ? "text-primary" : "text-gray-700"
              }`}
            >
              Instagram
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
            <Button
              onClick={() => window.open('https://gromo-voice-guru1.onrender.com/', '_blank')}
              variant="outline"
              size="sm"
              className="mr-2"
            >
              <Bot className="h-4 w-4 mr-1" />
              AI Assistant
            </Button>
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/why-us"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive("/why-us") ? "text-primary" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Why Us
              </Link>
              <Link
                to="/offers"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive("/offers") ? "text-primary" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Offers
              </Link>
              <Link
                to="/instagram"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive("/instagram") ? "text-primary" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Instagram
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button
                  onClick={() => {
                    window.open('https://gromo-voice-guru1.onrender.com/', '_blank');
                    setIsOpen(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  <Bot className="h-4 w-4 mr-1" />
                  AI Assistant
                </Button>
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
