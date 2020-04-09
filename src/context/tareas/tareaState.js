import React, { useReducer } from "react";
import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import { v4 as uuid } from "uuid";

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir idioma", estado: true, proyectoId: 2 },
      { id: 3, nombre: "Elegir hosting", estado: true, proyectoId: 3 },
      { id: 4, nombre: "Elegir dominio", estado: false, proyectoId: 4 },
      { id: 5, nombre: "Elegir idioma", estado: true, proyectoId: 1 },
      { id: 6, nombre: "Elegir hosting", estado: true, proyectoId: 2 },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  // obtener las tareas de un proyecto en especifico

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Eliminar tarea por id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Agregar un tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    tarea.id = uuid();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Cambia el estado de cada tarea (completo, incompleto)
  const cambiarEstadoTarea = tarea => {
      dispatch({
          type: ESTADO_TAREA,
          payload: tarea
      })
  }

  // Extrae una tarea para edicion 
  const guardarTareaActual = tarea => {
      dispatch({
          type:TAREA_ACTUAL,
          payload: tarea 
      })
  }

  // Edita una tarea
  const actualizarTarea = tarea => {
      dispatch({
          type:ACTUALIZAR_TAREA,
          payload:tarea
      })
  }

  // Elimina la tareaseleccionada
  const limpiarTarea = () => {
      dispatch({
          type:LIMPIAR_TAREA
      })
  }

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
