import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la funcion de context de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

  const handleClick = id => {
    eliminarTarea(tarea.id);
    obtenerTareas(proyecto[0].id);
  }

  // funcion que modifica el estado de las tareas
  const cambiarEstado = tarea => {
    tarea.estado = !tarea.estado;
    cambiarEstadoTarea(tarea);
  }
  
  return (
    <li className="tarea sombre">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo" onClick={()=>cambiarEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={()=>cambiarEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={()=>guardarTareaActual(tarea)}>
          Editar
        </button>
        <button type="button" className="btn btn-secundario" onClick={
         handleClick
        }>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
