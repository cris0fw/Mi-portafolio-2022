import React from "react";
import Imagenes from "./Imagenes";
import { FormattedMessage } from "react-intl";

const OtrasHabilidades = () => {
  return (
    <section className="otrasHabilidades">
      <h2> <FormattedMessage id="sectionOtrasMas" defaultMessage="other skills of mine" /> </h2>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Imagenes
              imagen="cmasmas.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="cmamas"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
            <Imagenes
              imagen="sharp.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="C#Sharp"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="java.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Java"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="vue.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Vue Js"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="start.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Start Uml"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="sqlserver.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Sql Server"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="mysql.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="My Sql"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="fotoshop.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Photoshop"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>

            
          <div className="slide">
            <Imagenes
              imagen="sharp.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="C#Sharp"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="java.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Java"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="vue.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Vue Js"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="start.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Start Uml"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="sqlserver.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Sql Server"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="mysql.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="My Sql"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div>
          <div className="slide">
          <Imagenes
              imagen="fotoshop.png"
              medida={{ width: "70px", height: "70px" }}
              parrafo="Photoshop"
              color={{ backgroundColor: "#194EA5" }}
            />
          </div> 

        </div>
      </div>
    </section>
  );
};

export default OtrasHabilidades;
