/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import { ContextoLenguaje } from "../context/ContextoLenguaje";

const Navbar = () => {
  const [clickBoton, setClickBoton] = useState(false);

  const { establecerMensaje } = useContext(ContextoLenguaje);

  return (
    <nav className="menu">
      <img className="logo" src={require("../img/logo.webp")} alt="logo-cris" />

      <ul className={`items ${clickBoton ? "show" : ""}`}>
          <button onClick={() => establecerMensaje("es")} className="imagenEs">
            <img src={require("../img/es.png")} alt="espanol" />
          </button>
          <button onClick={() => establecerMensaje("en")} className="imagenEn">
            <img src={require("../img/en.png")} alt="ingles" />
          </button>

        <li className="active">
          <a className="link" href="/">
            <FormattedMessage id="menuHome" defaultMessage="Home" />{" "}
          </a>
        </li>
        <li>
          <a className="link" href="#about">
            <FormattedMessage id="menuAbout" defaultMessage="About Me" />{" "}
          </a>
        </li>
        <li>
          <a className="link" href="#skills">
            <FormattedMessage id="menuSkills" defaultMessage="Skills" />{" "}
          </a>
        </li>
        <li>
          <a className="link" href="#experience">
            <FormattedMessage
              id="menuExperience"
              defaultMessage="Experience"
            />
          </a>
        </li>
        <li>
          <a className="link" href="#contact">
            <FormattedMessage id="menuContact" defaultMessage="Contact" />{" "}
          </a>
        </li>
      </ul>

      <span className="btn_menu" onClick={() => setClickBoton(!clickBoton)}>
        {clickBoton ? (
          <AiOutlineClose size="50px" color="white" />
        ) : (
          <BiMenu size="50px" color="white" />
        )}
      </span>
    </nav>
  );
};

export default Navbar;
