import { useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import {
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <CategoryModal />
      {/* --------------------- */}
      <header className="w-full bg-white border-b border-gray-200 relative z-50">
        {/* Top Navigation */}
        <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-0 text-sm">
          {/* Left Links */}
          <div className="hidden md:flex space-x-4">
            <a href="/about-us" className="btn btn-ghost px-2">
              About Us
            </a>
            <a href="/account" className="btn btn-ghost px-2">
              My Account
            </a>
            <a href="/wishlist" className="btn btn-ghost px-2">
              Wishlist
            </a>
            <a href="/order-tracking" className="btn btn-ghost px-2">
              Order Tracking
            </a>
          </div>
          <div className="flex items-center gap-5">
            <button className="btn px-8 btn-ghost">
              {" "}
              <FaUser className="text-lg" /> Profile
            </button>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-0">
          {/* Hamburger Icon for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              <FaBars />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo.svg" alt="Logo" className="h-10" />
            <span className="text-xl font-semibold text-black ml-2">
              The Book Vault
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-grow w-full md:w-auto mx-0 md:mx-6">
            <div className="flex w-2/3 join">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow input input-bordered join-item rounded-l-full pb-1"
              />
              <div className="">
                <button className="btn btn-neutral rounded-r-full">
                  <CgSearch className="text-lg" /> Search
                </button>
              </div>
            </div>
          </div>

          {/* User & Cart */}
          <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
            <a
              href="#!"
              className="btn btn-sm btn-circle btn-ghost flex tooltip"
              data-tip="Find a Book Store"
            >
              <FaMapMarkerAlt className="text-lg" />
            </a>
            <a
              href="/wishlist"
              className="btn btn-sm btn-circle btn-ghost flex tooltip"
            >
              <FaHeart className="text-gray-500 text-2xl" />
              <span className="absolute top-3 right-3 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                25
              </span>
            </a>
            <a
              href="/cart"
              data-tip=""
              className="btn btn-sm btn-circle btn-ghost flex tooltip"
            >
              <FaShoppingCart className="text-gray-500 text-2xl" />
              <span className="absolute top-3 right-3 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Navigation & Contact */}
        <div className="bg-gray-100 py-2 hidden md:block">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 space-y-4 md:space-y-0">
            {/* Categories Button */}
            <button
              className="btn btn-ghost"
              onClick={() =>
                document.getElementById("category_modal").showModal()
              }
            >
              <TbCategory2 className="text-lg" /> <p>Categories</p>
            </button>

            {/* Navigation Links */}
            <nav className="menu menu-horizontal px-1 gap-2">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/vendor"}>Vendor</NavLink>
              </li>
              <li>
                <NavLink to={"/pages"}>Pages</NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </nav>

            {/* Contact Information */}
            {/* <div className="flex items-center justify-center space-x-2 text-center md:text-left">
              <i className="fas fa-phone-alt text-gray-500"></i>
              <span className="text-red-500 font-bold">+1 840 - 841 25 69</span>
              <span className="text-gray-500">24/7 Support Center</span>
            </div> */}
          </div>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="text-lg font-bold">Menu</span>
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col space-y-4 p-4">
            <a href="/home" className="text-black hover:text-red-500">
              Home
            </a>
            <a href="/shop" className="text-black hover:text-red-500">
              Shop
            </a>
            <a href="/vendor" className="text-black hover:text-red-500">
              Vendor
            </a>
            <a href="/pages" className="text-black hover:text-red-500">
              Pages
            </a>
            <a href="/blog" className="text-black hover:text-red-500">
              Blog
            </a>
            <a href="/contact" className="text-black hover:text-red-500">
              Contact
            </a>
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
