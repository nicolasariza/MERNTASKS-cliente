import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;
  // Funcion para agregar le proyecto actual

  const seleccionarProyecto = id => {
    proyectoActual(id); // fijar proyecto actual
    obtenerTareas(id); // filtrar tareas cuando se de click
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
