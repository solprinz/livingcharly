import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
/* import { Navbar } from "./navbar/Navbar"; */
import { Navigation } from "./navbar/Navigation"


export const Layout = () => {
  return (
    <div className="main">
      <Navigation />
      <Outlet />
      <Footer />
    </div>

  )
};
