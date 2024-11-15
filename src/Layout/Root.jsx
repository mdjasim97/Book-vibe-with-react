import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div className="lg:mx-36">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
