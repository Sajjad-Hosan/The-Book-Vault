import { useContext, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaBars, FaTimes, FaMapMarkerAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged out!",
          text: "You've successfully logged out.",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops !",
          text: error.message,
        });
      })
  }

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 relative z-50 p-5">

        {/* Main Header */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-0">
          {/* Hamburger Icon for Mobile */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              <FaBars />
            </button>
          </div>

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo.svg" alt="Logo" className="h-10" />
              <span className="text-xl font-bold text-black ml-2">The Book Vault</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-grow w-full md:w-auto mx-0 md:mx-6">
            <div className="flex border border-gray-300 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow px-4 py-2 text-sm outline-none"
              />
              <select className="border-l border-gray-300 px-4 text-sm hidden md:block">
                <option value="all">All categories</option>
              </select>
              <button className="bg-red-500 px-6 text-white">
                <CiSearch />
              </button>
            </div>
          </div>

          {/* User & Cart */}
          <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
            <a href="#!" className="hidden md:flex items-center hover:text-gray-700">
              <FaMapMarkerAlt className="mr-2" />
              Find a Book Store
            </a>
            <a href="/dashboard/profile" className="relative">
              <FaUser className="text-gray-500 text-lg" />
            </a>
            <a href="/wishlist" className="relative">
              <FaHeart className="text-gray-500 text-2xl" />
              <span className="absolute top-3 right-3 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">25</span>
            </a>
            <a href="/cart" className="relative">
              <FaShoppingCart className="text-gray-500 text-2xl" />
              <span className="absolute top-3 right-3 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </a>
          </div>
        </div>

        {/* Bottom Navigation & Contact */}
        <div className="py-2 hidden md:block">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 space-y-4 md:space-y-0">
            {/* Categories Button */}
            {/* <button className="bg-red-500 text-white gap-2 px-4 py-2 rounded-lg flex items-center">
              <TbCategory2 /> <p>Categories</p>
            </button> */}

            {/* Navigation Links */}
            <nav className="flex space-x-6 text-center mx-auto">
              <Link className="text-black hover:text-red-500" to={'/'}>Home</Link>
              <Link className="text-black hover:text-red-500" to={'/products'}>Books</Link>
              <Link className="text-black hover:text-red-500" to={'/'}>Pages</Link>
              <Link className="text-black hover:text-red-500" to={'/'}>Blog</Link>
              <Link className="text-black hover:text-red-500" to={'/'}>Contact</Link>
            </nav>

            {/* Contact Information */}
            <div className="flex items-center justify-center space-x-2 text-center md:text-left">
              <i className="fas fa-phone-alt text-gray-500"></i>
              <span className="text-red-500 font-bold">+880 1740 000000</span>
              <span className="text-gray-500">24/7 Support Center</span>
              {
                user ?
                  <Link to='/' onClick={handleLogOut} className=" btn btn-error text-white text-base font-semibold">Log Out</Link>
                  :
                  <Link to={'/register'}> <button className="btn btn-outline border-red-500 text-red-500 text-center ">Register Now</button></Link>
              }
            </div>
          </div>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="text-lg font-bold">Menu</span>
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col space-y-4 p-4">
            <a href="/home" className="text-black hover:text-red-500">Home</a>
            <a href="/products" className="text-black hover:text-red-500">Books</a>
            <a href="/pages" className="text-black hover:text-red-500">Pages</a>
            <a href="/blog" className="text-black hover:text-red-500">Blog</a>
            <a href="/contact" className="text-black hover:text-red-500">Contact</a>
          </nav>
        </div>

        {/* Backdrop when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </header>
    </>
  );
};

export default Navbar;
