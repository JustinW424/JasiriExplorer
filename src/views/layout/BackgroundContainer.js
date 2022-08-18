import React from "react";
import Header from "./header";
import Footer from "./footer";
import Loader from "./Loader";
import SearchBox from "./header/SearchBox";


export default function BackgroundContainer({ children = null, ...props }) {
  return (
    <div
      className={[
        "w-full",
        "bg-center bg-no-repeat bg-cover bg-fixed",
        "relative",
        "flex flex-col items-stretch ",
      ].join(" ")}
    >
      <Header />
      <div className={["w-full flex-grow"].join(" ")}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
