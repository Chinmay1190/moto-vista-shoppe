
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-race-black border-b border-gray-200 dark:border-race-darkgray shadow-sm backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-racing text-2xl text-race-red">SuperBikes</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/") 
                    ? "text-race-red dark:text-race-red" 
                    : "text-gray-700 dark:text-gray-300 hover:text-race-red dark:hover:text-race-red"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/products") 
                    ? "text-race-red dark:text-race-red" 
                    : "text-gray-700 dark:text-gray-300 hover:text-race-red dark:hover:text-race-red"
                }`}
              >
                Bikes
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/contact") 
                    ? "text-race-red dark:text-race-red" 
                    : "text-gray-700 dark:text-gray-300 hover:text-race-red dark:hover:text-race-red"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon" 
              className="ml-2"
              asChild
            >
              <Link to="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            
            <Button
              variant="ghost" 
              size="icon"
              className="ml-2"
              asChild
            >
              <Link to="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            
            <Button
              variant="ghost" 
              size="icon"
              className="ml-2 relative"
              asChild
            >
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-race-red text-white rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            
            <div className="md:hidden ml-2">
              <Button
                variant="ghost" 
                size="icon"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-race-black dark:bg-opacity-95 bg-opacity-95 border-b dark:border-race-darkgray border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/") 
                  ? "text-race-red dark:text-race-red" 
                  : "text-gray-700 dark:text-gray-300 hover:text-race-red dark:hover:text-race-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/products") 
                  ? "text-race-red dark:text-race-red" 
                  : "text-gray-700 dark:text-gray-300 hover:text-race-red dark:hover:text-race-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Bikes
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/contact") 
                  ? "text-race-red dark:text-race-red" 
                  : "text-gray-700 dark:text-gray-300 hover:text-race-red dark:hover:text-race-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
