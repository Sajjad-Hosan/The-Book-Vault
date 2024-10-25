import { CiShop } from "react-icons/ci";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { MdArticle, MdOutlinePublishedWithChanges } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import ChaportChat from "./ChaportChat";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { fetchusers } from "./GetApi/UserSlice";
import { AuthContext } from "../Providers/AuthProviders";

const Dashboard = () => {
  const { logIn, user, loading } = useContext(AuthContext);
  const dispatch = useDispatch();
  
  // Extracting users and state from the Redux store
  const { users } = useSelector((state) => state.users);

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  // Find email of logged-in user from backend
  const loggedInUser = users.find((u) => u.email === user?.email);
  console.log(loggedInUser);

  return (
    <>
      <div className="flex bg-gray-200 pt-10">
        <h1 className="text-3xl lg:hidden font-bold flex justify-cente items-center lg:pt-8 gap-2 mx-9">
          <FaHome />
          Dashboard
        </h1>
        <div className="navbar bg-gray-200 pb-14">
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar for Large Screens */}
        <div className="w-80 min-h-screen font-bold bg-gray-200 hidden lg:block">
          <ul className="mx-8 gap-2 grid">
            <span className="justify-center flex text-4xl pt-8 pr-5">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </span>
            <h1 className="text-3xl font-bold justify-center items-center text-center pr-6 mx-5">
              {user?.displayName}
            </h1>
            <div className="divider"></div>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md p-3 text-xl text-center ${
                    isActive ? "bg-red-600 text-white" : ""
                  }`
                }
                to="order"
              >
                <CiShop />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md p-3 text-xl text-center ${
                    isActive ? "bg-red-600 text-white" : ""
                  }`
                }
                to="/dashboard/bookslist"
              >
                <MdArticle /> Book Lists
              </NavLink>
            </li>
            {loggedInUser?.role === "admin" && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md p-3 text-xl text-center ${
                      isActive ? "bg-red-600 text-white" : ""
                    }`
                  }
                  to="/dashboard/users"
                >
                  <FaUserPlus />
                  All users
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md p-3 text-xl text-center ${
                    isActive ? "bg-red-600 text-white" : ""
                  }`
                }
                to="/dashboard/addbooks"
              >
                <MdOutlinePublishedWithChanges />
                Add Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md p-3 text-xl text-center ${
                    isActive ? "bg-red-600 text-white" : ""
                  }`
                }
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
              <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-600 transition">
                Homepage
              </button>
            </NavLink>
            <NavLink
              className="flex gap-2 text-center text-red-600 text-2xl items-center"
              to="/products"
            >
              <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-600 transition">
                Products Page
              </button>
            </NavLink>
          </ul>
        </div>

        {/* Dropdown for Small Screens */}
        <div className="lg:hidden bg-gray-200">
          <div className="dropdown bg-gray-200">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="order">
                  <CiShop /> Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookslist">
                  <MdArticle /> Book Lists
                </NavLink>
              </li>
              {loggedInUser?.role === "admin" && (
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUserPlus /> All users
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/dashboard/addbooks">
                  <MdOutlinePublishedWithChanges /> Add Books
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/charts">
                  <FaChartSimple /> Charts
                </NavLink>
              </li>
              <div className="divider"></div>
              <NavLink
                className="flex gap-2 text-center text-red-600 text-xl items-center"
                to="/"
              >
                <button className="mt-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-600 transition">
                  Homepage
                </button>
              </NavLink>
              <NavLink
                className="flex gap-2 text-center text-red-600 text-xl items-center"
                to="/"
              >
                <button className="mt-6 px-4 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-600 transition">
                  Products Page
                </button>
              </NavLink>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <ChaportChat></ChaportChat>
    </>
  );
};

export default Dashboard;
