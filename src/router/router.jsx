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
import AllBooklist from "../Dashboard/Page/AllBooklist";
import PrivateDashboard from "../Dashboard/PrivatRoute/PrivateDashboard";
import PrivateSeller from "../Dashboard/PrivatRoute/PrivateSeller";
import Privatrout from "../Dashboard/PrivatRoute/Privatrout";

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
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "order",
        element: <PrivateSeller><Order></Order></PrivateSeller>
      },
      {
        path: "bookslist",
        element: <PrivateSeller><Booklist></Booklist></PrivateSeller>,
      },
      {
        path:"allbookslist",
        element:<Privatrout><AllBooklist></AllBooklist></Privatrout>

      },
      {
        path: "users",
        element: <Privatrout><User></User></Privatrout>
      },
      {
        path: "addbooks",
        element: <PrivateSeller><Addbooks>
        </Addbooks></PrivateSeller>
      },
      {
        path: "charts",
        element: <PrivateSeller><Charts></Charts></PrivateSeller>
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
