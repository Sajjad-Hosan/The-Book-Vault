// this is router file where will be all path create and connect

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
<<<<<<< HEAD
import Error from "../pages/Error/Error";
=======
import ProductDetails from "../pages/ProductsPage/ProductDetails";
>>>>>>> bc7e7b2f8d119f0c98eff3f9e9a1b0c30201b89c

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
