import React from "react";
import { CiShop } from "react-icons/ci";
import {
  FaHome,
  FaRedRiver,
  FaShoppingCart,
  FaStreetView,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import {
  FaBookBookmark,
  FaChartSimple,
  FaUsersViewfinder,
} from "react-icons/fa6";
import { MdArticle, MdOutlinePublishedWithChanges } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-80 min-h-screen font-bold bg-blue-100">
        <ul className="menu">
          <h1 className="text-3xl font-bold flex justify-cente items-center pt-2 gap-2 mx-4">
            <FaHome />
            Dashboard
          </h1>
          <div className="divider"></div>
          <li>
            <NavLink
              className="flex items-center gap-2 text-xl text-center"
              to="order"
            >
              <CiShop />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 text-center text-xl"
              to="/dashboard/bookslist"
            >
              <MdArticle /> Book Lists
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 text-xl text-center"
              to="/dashboard/users"
            >
              <FaUserPlus />
              All users
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 text-xl text-center"
              to="/dashboard/addbooks"
            >
              <MdOutlinePublishedWithChanges />
              Add Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center text-xl gap-2 text-center"
              to="/dashboard/charts"
            >
              <FaChartSimple />
              Charts
            </NavLink>
          </li>
          <div className="divider"></div>
          <NavLink
            className="flex gap-2 text-center text-red-600 text-2xl items-center"
            to="/"
          >
            <button className="mt-6 px-6 py-3 bg-cyan-700 text-white font-semibold rounded-full hover:bg-red-600 transition">
              Homeage
            </button>
          </NavLink>
        </ul>
      </div>
      <div className="flex-1">
        <div className="navbar bg-blue-100">
          <div className="flex-1">
            
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
