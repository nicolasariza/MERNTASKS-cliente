import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    errortarea,
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = tareasContext;

  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada) setTarea(tareaseleccionada);
  }, [tareaseleccionada]);

  const [tarea, setTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  if (!proyecto) return null;

  // Array destructuring para extraer el proyecto actual equivale a proyecto[0]
  const [proyectoActual] = proyecto;

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Validar si es edicion o nueva tarea
    if (tareaseleccionada === null) {
      // Agregar la nueva tarea la state de tareas
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    }else{
      actualizarTarea(tarea);
      limpiarTarea();
    }

    // Obtener y filtrar las tareas de proyecto actual
    obtenerTareas(proyectoActual.id);

    // reiniciar form
    setTarea({
      nombre: '',
    });
  };
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Ingresa el nombre de la tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar tarea" : "Agregar tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
