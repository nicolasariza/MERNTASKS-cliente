import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
  return (
    <aside>
      
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <div className="list-sidebar">
          <ListadoProyectos />    
        </div>
      </div>
      <h3 className="footer-sidebar">Nicolas Ariza - 2020</h3>
    </aside>
  );
};

export default Sidebar;
