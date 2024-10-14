
import { CiShop } from "react-icons/ci";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { MdArticle, MdOutlinePublishedWithChanges } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex bg-blue-100">
        <h1 className="text-3xl font-bold flex justify-cente items-center py-8 lg:py-1 lg:pt-8 gap-2 mx-9">
          <FaHome />
          Dashboard
        </h1>
        <div className="navbar bg-blue-100">
          <div className="flex-1"></div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <h1>Me</h1>
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
                    src="https://avatars.githubusercontent.com/u/99748784?v=4"
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
      </div>
      <div className="flex">
        {/* Sidebar for Large Screens */}
        <div className="w-80 min-h-screen font-bold bg-blue-100 hidden lg:block">
          <ul className="mx-5 gap-2 grid">
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
              to="/"
            >
              <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-600 transition">
                Products Page
              </button>
            </NavLink>
          </ul>
        </div>

        {/* Dropdown for Small Screens */}
        <div className="lg:hidden bg-blue-100">
          <div className="dropdown bg-blue-100">
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
              className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
              <li>
                <NavLink to="/dashboard/users">
                  <FaUserPlus /> All users
                </NavLink>
              </li>
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
    </>
  );
};

export default Dashboard;
