import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default RootLayout;
