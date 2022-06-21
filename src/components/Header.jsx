import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";
import Button from './button';

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />      
        <Link to="/"><Button>Home</Button></Link>
      </nav>
    </header>
  );
};

export default Header;