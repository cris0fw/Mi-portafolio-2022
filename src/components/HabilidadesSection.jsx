/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import Imagenes from "./Imagenes";
import { FormattedMessage } from "react-intl";

const HabilidadesSection = () => {
  return (
    <section className="habilidades" id="skills">
      <div className="texto">
        <h1> <FormattedMessage id="sectionSkills" defaultMessage="Skills" /> </h1>
      </div>

      <div className="contenedorHabilidades">
        <Imagenes
          imagen="html.png"
          medida={{ width: "75px", height: "75px" }}
          parrafo="Html"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="css.png"
          medida={{ width: "75px", height: "75px" }}
          parrafo="Css"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="javascript.png"
          medida={{ width: "140px", height: "80px" }}
          parrafo="Javascript"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="php.png"
          medida={{ width: "120px", height: "70px" }}
          parrafo="Php"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="react.png"
          medida={{ width: "90px", height: "70px" }}
          parrafo="React"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="redux.png"
          medida={{ width: "70px", height: "70px" }}
          parrafo="Redux"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="node.png"
          medida={{ width: "80px", height: "70px" }}
          parrafo="Node Js"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="mongodb.png"
          medida={{ width: "70px", height: "70px" }}
          parrafo="Mongo Db"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="boostrap.png"
          medida={{ width: "70px", height: "60px" }}
          parrafo="Boostrap"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="wordpress.png"
          medida={{ width: "70px", height: "70px" }}
          parrafo="Wordpress"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="github.png"
          medida={{ width: "70px", height: "70px" }}
          parrafo="Github"
          color={{backgroundColor: "#1E1E1E"}}
        />

        <Imagenes
          imagen="figma.png"
          medida={{ width: "70px", height: "70px" }}
          parrafo="Figma"
          color={{backgroundColor: "#1E1E1E"}}
        />
      </div>
    </section>
  );
};

export default HabilidadesSection;
