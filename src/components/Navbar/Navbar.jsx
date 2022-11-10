import React, {useState} from "react";
import { NavWrapper } from "./Navbarstyle";
import { BgDiv } from "./Navbarstyle";
import { FaUserAlt } from "react-icons/fa"; 
import { BsCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import BurgerBtn from "./BurgerBtn";

const Navbar = () => {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // Aprendi que hacer esto sirve para cuando esta true lo pase a false y vice versa
    setClicked(!clicked)
  }

  
    return (
        <>
         <NavWrapper>
          <div className="navbar_logo">
            <img src={require('../assets/Pizzalogo.png')} id="logo" alt="Logo"/>
          </div>
          <div className="navbar_elements">
              <div className={`links ${clicked ? 'active' : ''}`}>
              <Link to="/" onclick={handleClick}>Inicio</Link>
              <Link to="/login" onclick={handleClick}><FaUserAlt style={{marginRight:'.5rem'}}/>Accede</Link>
              <Link to="/products" onclick={handleClick}>Productos</Link>
              <Link to="/contact" onclick={handleClick}>Contactanos</Link>
              <Link onclick={handleClick}><BsCartFill style={{fontSize: "1.5em"}}/></Link>
            </div>
          </div>
          <div className="burger">
          <BurgerBtn clicked={clicked} handleClick={handleClick}/>
          </div>
         </NavWrapper>
         <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>


        </>
    );
}

export default Navbar;