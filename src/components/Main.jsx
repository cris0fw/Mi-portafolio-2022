import React from "react";
import { FormattedMessage } from "react-intl";
import {BiDownload} from 'react-icons/bi'

const Main = () => {
  return (
    <main className="main" id="about">
      <h1> <FormattedMessage id="mainAboutMeTittle" defaultMessage="About me" /> </h1>

      <div className="main-imagen-texto">
        <div className="box" data-aos="fade-right"></div>

        <div className="parrafos" data-aos="fade-left">
          <p>
            <FormattedMessage
              id="mainAboutMe"
              defaultMessage="My name is Cristian Ludueña, I started programming since I was 18 years old and from then on I started to get interested in new technologies. He studied 3 years to train as a software development technician, and from then on I was self-taught in learning new areas such as react and node js. I am a responsible person, and I particularly like challenges. I am willing to be part of any organization/company in order to gain experience and offer my knowledge."
            />
          </p>

          <a href={require("../docs/Curriculom.pdf")} className="icono" download><BiDownload color="white" fontSize="30"/> Descargar CV</a>
        </div>
      </div>
    </main>
  );
};

export default Main;
