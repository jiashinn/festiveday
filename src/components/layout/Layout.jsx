import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header active />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
