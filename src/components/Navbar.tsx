
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-elecon-blue text-2xl font-bold">ELECON</span>
          <span className="text-elecon-gray text-2xl ml-1 font-light">GROUP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-elecon-blue font-medium transition-colors">
            Home
          </Link>
          <Link to="/industries" className="text-gray-700 hover:text-elecon-blue font-medium transition-colors">
            Elecon Industries
          </Link>
          <Link to="/aerotech" className="text-gray-700 hover:text-elecon-blue font-medium transition-colors">
            Elecon Aerotech
          </Link>
          <Link to="/contact">
            <Button variant="default" className="bg-elecon-blue hover:bg-elecon-lightblue">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-elecon-blue focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-700 hover:bg-elecon-lightgray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/industries" 
              className="px-4 py-2 text-gray-700 hover:bg-elecon-lightgray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Elecon Industries
            </Link>
            <Link 
              to="/aerotech" 
              className="px-4 py-2 text-gray-700 hover:bg-elecon-lightgray rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Elecon Aerotech
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-elecon-blue text-white hover:bg-elecon-lightblue rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
