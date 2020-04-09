import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // Obtener el state de formulario

  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  // State para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  // extraer nombre del proyecto

  const { nombre } = proyecto;

  // al hacer submit en el form

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      mostrarError();
      return;
    }  

    agregarProyecto(proyecto);

    // limpiar formulario
    setProyecto({
      nombre: "",
    });
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del proyecto"
            name="nombre"
            value={nombre}
            onChange={(e) =>
              setProyecto({ ...proyecto, [e.target.name]: e.target.value })
            }
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
