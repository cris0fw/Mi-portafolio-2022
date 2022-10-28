import React from "react";

const Imagenes = ({imagen, medida, parrafo, color}) => {

  return (
    <div className="contElements" style={color}>
      <img src={require(`../img/${imagen}`)} style={medida} alt="javascript" />
      <p>{parrafo}</p>
    </div>
  );
};

export default Imagenes;
