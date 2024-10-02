import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;
