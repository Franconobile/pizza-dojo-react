import React from "react";
import { NavWrapper } from "./Navbarstyle";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
         <NavWrapper>
          <div className="navbar_logo">
            <img src={require('../assets/Pizzalogo.png')} id="logo" alt="Logo"/>
          </div>
         </NavWrapper>
        


        </>
    );
}

export default Navbar;