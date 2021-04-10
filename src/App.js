import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import tokenAuth from "./config/token";
import RutaPrivada from "./components/rutas/RutaPrivada";

// Revisar si hay un token
const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <HashRouter basename='/'>
      <ProyectoState>
        <TareaState>
          <AlertaState>
            <AuthState>
                <Switch>
                  <Route exact path={'/'} component={Login} />
                  <Route
                  exact
                    path={'/nueva-cuenta'}
                    component={NuevaCuenta}
                  />
                  <RutaPrivada
                    exact
                    path={'/proyectos'}
                    component={Proyectos}
                  />
                </Switch>
            </AuthState>
          </AlertaState>
        </TareaState>
      </ProyectoState>
    </HashRouter>
  );
}

export default App;
