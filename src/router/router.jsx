// this is router file where will be all path create and connect

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Error from "../pages/Error/Error";
import ProductDetails from "../pages/ProductsPage/ProductDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

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
        element: <ProductDetails />,
        loader: ({params}) => fetch(`https://the-book-vault-backend.vercel.app/details/${params.id}`)
      }
    ],
  },
]);

export default router;
