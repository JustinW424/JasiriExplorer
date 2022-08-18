import React from "react";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";

export default function Header({ ...props }) {
  
  return (
      <div>
        <NavBar/>
        <SearchBox/>
      </div>
    
  );
}


