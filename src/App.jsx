import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
