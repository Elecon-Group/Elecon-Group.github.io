
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elecon-blue text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elecon Group</h3>
            <p className="mb-4">
              Leading the way in plastic injection molding and advanced drone technologies.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">ELECON</span>
              <span className="text-white/70 text-3xl font-light">GROUP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Companies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/industries" className="hover:text-elecon-lightgray transition-colors">
                  Elecon Industries
                </Link>
              </li>
              <li>
                <Link to="/aerotech" className="hover:text-elecon-lightgray transition-colors">
                  Elecon Aerotech
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-elecon-lightgray transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic">
              <p className="mb-2">Elecon Industries</p>
              <p className="mb-2">KHASRA NO. 89, 8/1, 9/2, 10/1</p>
              <p className="mb-2">Mouli - Ambala Road, Barwala, Haryana</p>
              <p className="mb-2">Tehsil - Barwala, VPO. Mouli</p>
              <p className="mb-2">Email: manish@elecongroup.in</p>
              <p>Phone: +91 85808 25850</p>
            </address>
          </div>

        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Elecon Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
