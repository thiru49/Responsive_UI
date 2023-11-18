import React, { useState } from 'react';
import { BiAlignRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = ()=> {
return(
  <>
    <p><a href="#home">Home</a></p>
          <p><a href="#gpt-3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#feature">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
  </>
)
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className="gpt3__navbar" id='home'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="log" />
        </div>
        <div className="gpt3__navbar-links_continer">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>SignIn</p>
        <button type="button">SignUp</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <button onClick={() => setToggleMenu(false)}><IoMdClose /></button>
        ) : (
          <button onClick={() => setToggleMenu(true)}><BiAlignRight /></button>
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar_container-links">
              <Menu />
              <div className="gpt3__navbar_container-links-sign">
                
                  <p>SignIn</p>
                  <button type="button">SignUp</button>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
