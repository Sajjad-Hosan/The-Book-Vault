// this is router file where will be all path create and connect

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetails from "../pages/ProductsPage/ProductDetails";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      }
    ],
  },
]);

export default router;
