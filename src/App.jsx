import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    const tawk = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    tawk.async = true;
    tawk.src = "https://embed.tawk.to/681bc9a6c905ab190eadbb7c/1iqm8ndo9";
    tawk.charset = "UTF-8";
    tawk.setAttribute("crossorigin", "*");
    document.body.appendChild(tawk);

    return () => {
      document.body.removeChild(tawk);
    };
  }, []);
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
