import React, {useState} from 'react';
import userIcon from '../../assets/usericon.png';
import { CartIcon } from '../Cart/CartIcon';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';
import { toggleMenu } from '../../redux/features/user/userSlice';
import { FaUserAlt } from "react-icons/fa"; 
import { NavWrapper } from './NavbarStyle';
import { NavbarElements } from './NavbarStyle';
import { User } from './NavbarStyle';


export const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // Aprendi que hacer esto sirve para cuando esta true lo pase a false y vice versa
    setClicked(!clicked)
  }

  return (

    <NavWrapper>
      <Link to="/">
        <img src={require('../assets/Pizzalogo.png')} id="logo" alt="Logo"/>
      </Link>
      <NavbarElements>
        <Link to="/" onclick={handleClick}>Inicio</Link>
        {currentUser ? (
          <>
            <User src={userIcon} onClick={handleToggle} />
            <UserMenu user={currentUser} />
          </>
        ) : (
          <Link to="/login" onclick={handleClick}><FaUserAlt style={{marginRight:'.5rem'}}/>Accede</Link>
        )}
          <Link to="/products" onclick={handleClick}>Productos</Link>
          <Link to="/contact" onclick={handleClick}>Contactanos</Link>
        <CartIcon />
      </NavbarElements>
    </NavWrapper>
    
  );
};