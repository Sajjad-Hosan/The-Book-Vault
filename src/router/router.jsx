// this is router file where will be all path create and connect

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Error from "../pages/Error/Error";
import ProductDetails from "../pages/ProductsPage/ProductDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Booklist from "../Dashboard/Page/Booklist";
import User from "../Dashboard/Page/User";
import Addbooks from "../Dashboard/Page/Addbooks";
import Charts from "../Dashboard/Page/Charts";
import Order from "../Dashboard/Page/Order";
import Profile from "../Dashboard/UserDashboard/Profile/Profile";
import Wishlist from "../Dashboard/UserDashboard/Wishlist/Wishlist";
import PrivateRoutes from "./PrivateRoutes";
import Privatrout from "../Dashboard/PrivatRoute/privatrout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><ProductDetails /></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://the-book-vault-backend.vercel.app/details/${params.id}`)
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "order",
        element: <Order></Order>
      },
      {
        path: "bookslist",
        element: <Booklist></Booklist>,
      },
      {
        path: "users",
        element: <Privatrout><User></User></Privatrout>
      },
      {
        path: "addbooks",
        element: <Addbooks>
        </Addbooks>
      },
      {
        path: "charts",
        element: <Charts></Charts>
      },

      // User
      {
        path: "profile",
        element: <PrivateRoutes><Profile /></PrivateRoutes>,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ]
  }
]);

export default router;
