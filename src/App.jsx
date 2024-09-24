import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer/Footer";

const App = () => {
  return (
    <>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default App;
