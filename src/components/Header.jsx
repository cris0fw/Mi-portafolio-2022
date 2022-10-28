/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { FormattedMessage } from "react-intl";
import Aos from 'aos'
import 'aos/dist/aos.css';

const Header = () => {
useEffect(() => {
  Aos.init({duration: "2000"});
},[])

  return (
    <header className="header">
      <Navbar />

      <div className="contenedor-principal" data-aos="fade-up" >
         <h1> <FormattedMessage id="headerPrincipal" defaultMessage="I am a front-end developer" /> </h1>

        <a href="#contact"> 
          <span></span>
          <FormattedMessage id="headerContact" defaultMessage="contact me" /> 
        </a>
      </div>
    </header>
  );
};

export default Header;
