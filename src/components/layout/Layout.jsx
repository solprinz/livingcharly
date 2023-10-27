import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Navigation } from "./navbar/Navigation";

export const Layout = () => {
  return (
    <div className="main">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
