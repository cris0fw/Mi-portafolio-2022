/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import {AiFillEye} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const CardExperiencia = ({imagen, titulo, parrafo, link,linkDos, condicion}) => {
  return (
    <div className="portafolio-container">
      <section className="portafolio-item">
        <img src={require(`../img/${imagen}.png`)}  alt="" className="portafolio-img" />
        <section className="portafolio-text">
          <h2> {titulo} </h2>
          <p>
            {parrafo}
          </p>
         
         {
          condicion === "pagina" ? (
            <a href={link} target="_blanc" > <AiFillEye fontSize="30px" color="#55A7BB"/> <span>Vér página</span></a>  
          ) : condicion === "github" ? (
            <a href={link} target="_blanc" > <BsGithub fontSize="30px" color="#ffff"/> <span>Vér proyecto</span></a> 
          ) : condicion === "dos" ? (
            <div className="botones">
               <a href={link} target="_blanc" > <AiFillEye fontSize="30px" color="#55A7BB"/> <span>Vér página</span></a>  
               <a href={linkDos} target="_blanc" > <BsGithub fontSize="30px" color="#ffff"/> <span>Vér proyecto</span></a> 
            </div>
          ) : ""
         }

        </section>
      </section>
    </div>
  );
};

export default CardExperiencia;
