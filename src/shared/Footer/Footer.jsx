import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaCcMastercard, FaCcPaypal, FaCcAmex, FaBitcoin, FaCcVisa, FaCcDiscover } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white my-8 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Section: Logo and Contact Info */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
        <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo.svg" alt="Logo" className="h-10" />
            <span className="text-xl font-bold text-black ml-2">The Book Vault</span>
          </div>
          <p className="mt-2 text-gray-600">Got Questions? Call us 24/7!</p>
          <p className="text-red-500 text-3xl font-semibold mt-2">+(84) - 1800 - 4635</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Center Section: Contact Information */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">Contact Info</h3>
          <p className="text-gray-600">1418 River Drive, Suite 35<br />
            Cottonhall, CA 96222
          </p>
          <p className="text-gray-600">Monday – Friday: 9:00-20:00<br />
            Saturday: 11:00 – 15:00
          </p>
          <p className="text-gray-600">contact@devdynamos.com</p>
        </div>

        {/* Explore Links */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">Explore</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="hover:text-gray-800">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-800">Bookmarks</a></li>
            <li><a href="#" className="hover:text-gray-800">Sign in/Join</a></li>
          </ul>
        </div>

        {/* Our Service Links */}
        <div className="w-full lg:w-1/4">
          <h3 className="font-semibold text-gray-800 mb-2">Our Service</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-gray-800">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-800">Returns</a></li>
            <li><a href="#" className="hover:text-gray-800">Product Recalls</a></li>
            <li><a href="#" className="hover:text-gray-800">Accessibility</a></li>
            <li><a href="#" className="hover:text-gray-800">Store Pickup</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center border-t border-gray-200 pt-4 mt-8">
        <p className="text-gray-500 text-sm text-center lg:text-left">
          Copyright © 2024 <span className="text-red-500">DevDynamos</span>. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <FaCcMastercard className="text-gray-600 text-2xl" />
          <FaCcPaypal className="text-gray-600 text-2xl" />
          <FaCcAmex className="text-gray-600 text-2xl" />
          <FaCcVisa className="text-gray-600 text-2xl" />
          <FaBitcoin className="text-gray-600 text-2xl" />
          <FaCcDiscover className="text-gray-600 text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
