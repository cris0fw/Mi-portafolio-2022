import React from "react";
import CardExperiencia from "./CardExperiencia";

const Experiencias = () => {
  return (
    <section className="experiencias" id="experience">
      <div className="descubrir">
	      <h1>Experiencias</h1>
        <p>Descubre algunos proyectos que he realizado!</p>
      </div>

      <article className="grid-proyectos">
        <CardExperiencia 
            imagen="respuestos"
            titulo="Tienda de repuestos"
            parrafo="Wordpress, Elementor, Ecommerce"
            link="https://repuestos.lineadecompras.com/"
            condicion="pagina"
        />
        <CardExperiencia 
            imagen="suskill"
            titulo="Red social de deportes"
            parrafo="Wordpress, Elementor, BuddyPress"
            link="https://suskill.com/"
            condicion="pagina"
        />
         <CardExperiencia 
            imagen="shop"
            titulo="Tienda de regedits"
            parrafo="Html, Css, Php"
            link="https://github.com/cris0fw/shop-regedit"
            condicion="github"
        />
        <CardExperiencia 
            imagen="calculadora"
            titulo="Calculadora"
            parrafo="Html, Css, React"
            link="https://github.com/cris0fw/Calculadora-interactiva-con-react"
            condicion="github"
        />
        <CardExperiencia 
            imagen="todoList"
            titulo="Todo List"
            parrafo="Html, Css, React"
            link="https://github.com/cris0fw/Todo-List-con-react"
            condicion="github"
        />
         <CardExperiencia 
            imagen="portafolio"
            titulo="Portafolio 2022"
            parrafo="Html, Css, React"
            link="https://suskill.com/"
        />
      </article>
    </section>
  );
};

export default Experiencias;
