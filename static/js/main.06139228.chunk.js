(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{39:function(e,a,t){e.exports=t(68)},44:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(17),c=t.n(o),l=(t(44),t(14)),s=t(13),u=t(11),i=t(1),m=t(4),p=Object(r.createContext)(),d=Object(r.createContext)(),b=function(e){var a=Object(r.useContext)(p),t=a.alerta,o=a.mostrarAlerta,c=Object(r.useContext)(d),s=c.mensaje,b=c.autenticado,E=c.iniciarSesion,f=Object(r.useState)({email:"",password:""}),O=Object(m.a)(f,2),y=O[0],v=O[1];Object(r.useEffect)((function(){b&&e.history.push("/MERNTASKS-cliente/proyectos"),s&&o(s.msg,s.categoria)}),[s,b,e.history]);var R=y.email,g=y.password,A=function(e){v(Object(i.a)({},y,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-usuario"},n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Iniciar Sesi\xf3n"),t?n.a.createElement("div",{className:"alerta ".concat(t.categoria)},t.msg):null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==R.trim()&&""!==g.trim()||o("Todos los campos son obligatorios","alerta-error"),E({email:R,password:g})}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",value:R,placeholder:"Ingresa t\xfa email",onChange:A})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",value:g,placeholder:"Ingresa t\xfa contrase\xf1a",onChange:A})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Sesi\xf3n"}))),n.a.createElement(l.b,{to:"/nueva-cuenta",className:"enlace-cuenta "},"Obtener Cuenta")))},E=function(e){var a=Object(r.useContext)(p),t=a.alerta,o=a.mostrarAlerta,c=Object(r.useContext)(d),s=c.mensaje,b=c.autenticado,E=c.registrarUsuario;Object(r.useEffect)((function(){b&&e.history.push("/MERNTASKS-cliente/proyectos"),s&&o(s.msg,s.categoria)}),[s,b,e.history]);var f=Object(r.useState)({nombre:"",email:"",password:"",confirmar:""}),O=Object(m.a)(f,2),y=O[0],v=O[1],R=y.nombre,g=y.email,A=y.password,j=y.confirmar,h=function(e){v(Object(i.a)({},y,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-usuario"},t?n.a.createElement("div",{className:"alerta ".concat(t.categoria)},t.msg):null,n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Obtener una cuenta"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==R.trim()&&""!==g.trim()&&""!==A.trim()&&""!==j.trim()?A.length<6?o("El password debe tener m\xednimo 6 caracteres","alerta-error"):A===j?E({nombre:R,email:g,password:A}):o("Los passwords no son iguales","alerta-error"):o("Todos los campos son obligatorios","alerta-error")}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"nombre"},"Nombre"),n.a.createElement("input",{type:"text",id:"nombre",name:"nombre",value:R,placeholder:"Ingresa t\xfa nombre",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",value:g,placeholder:"Ingresa t\xfa email",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",value:A,placeholder:"Ingresa t\xfa contrase\xf1a",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"confirmar"},"Confirmar password"),n.a.createElement("input",{type:"password",id:"confirmar",name:"confirmar",value:j,placeholder:"Repite t\xfa contrase\xf1a",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"}))),n.a.createElement(l.b,{to:"/",className:"enlace-cuenta "},"Iniciar sesi\xf3n")))},f=Object(r.createContext)(),O=function(){var e=Object(r.useContext)(f),a=e.formulario,t=e.errorformulario,o=e.mostrarFormulario,c=e.agregarProyecto,l=e.mostrarError,s=Object(r.useState)({nombre:""}),p=Object(m.a)(s,2),d=p[0],b=p[1],E=d.nombre;return n.a.createElement(r.Fragment,null,n.a.createElement("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){return o()}},"Nuevo proyecto"),a?n.a.createElement("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==E?(c(d),b({nombre:""})):l()}},n.a.createElement("input",{type:"text",className:"input-text",placeholder:"Nombre del proyecto",name:"nombre",value:E,onChange:function(e){return b(Object(i.a)({},d,Object(u.a)({},e.target.name,e.target.value)))}}),n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar proyecto"})):null,t?n.a.createElement("p",{className:"mensaje error"},"El nombre del proyecto es obligatorio"):null)},y=Object(r.createContext)(),v=function(e){var a=e.proyecto,t=Object(r.useContext)(f).proyectoActual,o=Object(r.useContext)(y).obtenerTareas;return n.a.createElement("li",null,n.a.createElement("button",{type:"button",className:"btn btn-blank",onClick:function(){return e=a._id,t(e),void o(e);var e}},a.nombre))},R=t(70),g=t(69),A=function(){var e=Object(r.useContext)(f),a=e.mensaje,t=e.proyectos,o=e.obtenerProyectos,c=Object(r.useContext)(p),l=c.alerta,s=c.mostrarAlerta;return Object(r.useEffect)((function(){a&&s(a.msg,a.categoria),o()}),[a]),0===t.length?n.a.createElement("p",null,"No hay proyectos, comienza creando uno"):n.a.createElement("ul",{className:"listado-proyectos"},l?n.a.createElement("div",{className:"alerta ".concat(l.categoria)},l.msg):null,n.a.createElement(R.a,null,t.map((function(e){return n.a.createElement(g.a,{key:e._id,timeout:500,classNames:"proyecto"},n.a.createElement(v,{proyecto:e}))}))))},j=function(){return n.a.createElement("aside",null,n.a.createElement("h1",null,"MERN",n.a.createElement("span",null,"Tasks")),n.a.createElement(O,null),n.a.createElement("div",{className:"proyectos"},n.a.createElement("h2",null,"Tus proyectos"),n.a.createElement(A,null)))},h=function(){var e=Object(r.useContext)(d),a=e.usuario,t=e.usuarioAutenticado,o=e.cerrarSesion;return Object(r.useEffect)((function(){t()}),[]),n.a.createElement("header",{className:"app-header"},n.a.createElement("p",{className:"nombre-usuario"},"Hola ",n.a.createElement("span",null,a?a.nombre:null)),n.a.createElement("nav",{className:"nav-principal"},n.a.createElement("button",{className:"btn btn-blank cerrar-sesion",onClick:function(){return o()}},"Cerrar Sesi\xf3n")))},T=function(){var e=Object(r.useContext)(f).proyecto,a=Object(r.useContext)(y),t=a.errortarea,o=a.tareaseleccionada,c=a.agregarTarea,l=a.validarTarea,s=a.obtenerTareas,p=a.actualizarTarea,d=a.limpiarTarea;Object(r.useEffect)((function(){o&&v(o)}),[o]);var b=Object(r.useState)({nombre:""}),E=Object(m.a)(b,2),O=E[0],v=E[1],R=O.nombre;if(!e)return null;var g=Object(m.a)(e,1)[0];return n.a.createElement("div",{className:"formulario"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==R.trim()?(null===o?(O.proyecto=g._id,c(O)):(p(O),d()),s(g.id),v({nombre:""})):l()}},n.a.createElement("div",{className:"contenedor-input"},n.a.createElement("input",{type:"text",className:"input-text",placeholder:"Ingresa el nombre de la tarea...",name:"nombre",value:R,onChange:function(e){v(Object(i.a)({},O,Object(u.a)({},e.target.name,e.target.value)))}})),n.a.createElement("div",{className:"contenedor-input"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-submit btn-block",value:o?"Editar tarea":"Agregar tarea"}))),t?n.a.createElement("p",{className:"mensaje error"},"El nombre de la tarea es obligatorio"):null)},N=function(e){var a=e.tarea,t=Object(r.useContext)(f).proyecto,o=Object(r.useContext)(y),c=o.eliminarTarea,l=o.obtenerTareas,s=o.actualizarTarea,u=o.guardarTareaActual,i=Object(m.a)(t,1)[0],p=function(e){e.estado=!e.estado,s(e)};return n.a.createElement("li",{className:"tarea sombre"},n.a.createElement("p",null,a.nombre),n.a.createElement("div",{className:"estado"},a.estado?n.a.createElement("button",{type:"button",className:"completo",onClick:function(){return p(a)}},"Completo"):n.a.createElement("button",{type:"button",className:"incompleto",onClick:function(){return p(a)}},"Incompleto")),n.a.createElement("div",{className:"acciones"},n.a.createElement("button",{type:"button",className:"btn btn-primario",onClick:function(){return u(a)}},"Editar"),n.a.createElement("button",{type:"button",className:"btn btn-secundario",onClick:function(){return e=a._id,c(e,i._id),void l(i.id);var e}},"Eliminar")))},C=function(){var e=Object(r.useContext)(f),a=e.proyecto,t=e.eliminarProyecto,o=Object(r.useContext)(y).tareasproyecto;if(!a)return n.a.createElement("h1",null,"Selecciona un proyecto");var c=Object(m.a)(a,1)[0];return a?n.a.createElement(r.Fragment,null,n.a.createElement("h2",null,"Proyecto: ",c.nombre),n.a.createElement("ul",{className:"listado-tareas"},0===o.length?n.a.createElement("li",{className:"tarea"},n.a.createElement("p",null,"No hay tareas")):n.a.createElement(R.a,null,o.map((function(e){return n.a.createElement(g.a,{key:e.id,timeout:500,classNames:"tarea"},n.a.createElement(N,{tarea:e}))})))),n.a.createElement("button",{type:"button",className:"btn btn-eliminar",onClick:function(){return t(c._id)}},"Eliminar proyecto \xd7")):null},x=function(){var e=Object(r.useContext)(d).usuarioAutenticado;return Object(r.useEffect)((function(){e()}),[]),n.a.createElement("div",{className:"contenedor-app"},n.a.createElement(j,null),n.a.createElement("div",{className:"seccion-principal"},n.a.createElement(h,null),n.a.createElement("main",null,n.a.createElement(T,null),n.a.createElement("div",{className:"contenedor-tareas"},n.a.createElement(C,null)))))},_=t(3),k=t.n(_),I=t(9),S=t(19),w=function(e,a){switch(a.type){case"FORMULARIO_PROYECTO":return Object(i.a)({},e,{formulario:!e.formulario});case"OBTENER_PROYECTOS":return Object(i.a)({},e,{proyectos:a.payload});case"AGREGAR_PROYECTO":return Object(i.a)({},e,{proyectos:[].concat(Object(S.a)(e.proyectos),[a.payload]),formulario:!1,errorformulario:!1});case"VALIDAR_FORMULARIO":return Object(i.a)({},e,{errorformulario:!0});case"PROYECTO_ACTUAL":return Object(i.a)({},e,{proyecto:e.proyectos.filter((function(e){return e._id===a.payload}))});case"ELIMINAR_PROYECTO":return Object(i.a)({},e,{proyectos:e.proyectos.filter((function(e){return e._id!==a.payload})),proyecto:null});case"PROYECTO_ERROR":return Object(i.a)({},e,{mensaje:a.payload});default:return e}},L=t(35),P=t.n(L).a.create({baseURL:"https://evening-fjord-70230.herokuapp.com/"}),M=function(e){var a=Object(r.useReducer)(w,{proyectos:[],formulario:!1,errorformulario:!1,proyecto:null,mensaje:null}),t=Object(m.a)(a,2),o=t[0],c=t[1],l=function(){var e=Object(I.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.get("/api/proyectos");case 3:a=e.sent,c({type:"OBTENER_PROYECTOS",payload:a.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"PROYECTO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(I.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.post("/api/proyectos",a);case 3:t=e.sent,console.log(t),c({type:"AGREGAR_PROYECTO",payload:t.data.proyecto}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c({type:"PROYECTO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(I.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.delete("/api/proyectos/".concat(a));case 3:c({type:"ELIMINAR_PROYECTO",payload:a}),c({type:"ELIMINAR_PROYECTO",payload:a}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"PROYECTO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(f.Provider,{value:{proyectos:o.proyectos,formulario:o.formulario,errorformulario:o.errorformulario,proyecto:o.proyecto,mensaje:o.mensaje,mostrarFormulario:function(){c({type:"FORMULARIO_PROYECTO"})},obtenerProyectos:l,agregarProyecto:s,mostrarError:function(){c({type:"VALIDAR_FORMULARIO"})},proyectoActual:function(e){c({type:"PROYECTO_ACTUAL",payload:e})},eliminarProyecto:u}},e.children)},U=function(e,a){switch(a.type){case"TAREAS_PROYECTO":return Object(i.a)({},e,{tareasproyecto:a.payload});case"AGREGAR_TAREA":return Object(i.a)({},e,{tareasproyecto:[a.payload].concat(Object(S.a)(e.tareasproyecto)),errortarea:!1});case"VALIDAR_TAREA":return Object(i.a)({},e,{errortarea:!0});case"ELIMINAR_TAREA":return Object(i.a)({},e,{tareasproyecto:e.tareasproyecto.filter((function(e){return e._id!==a.payload}))});case"ACTUALIZAR_TAREA":return Object(i.a)({},e,{tareasproyecto:e.tareasproyecto.map((function(e){return e._id===a.payload._id?a.payload:e}))});case"TAREA_ACTUAL":return Object(i.a)({},e,{tareaseleccionada:a.payload});case"LIMPIAR_TAREA":return Object(i.a)({},e,{tareaseleccionada:null});default:return e}},G=function(e){var a=Object(r.useReducer)(U,{tareasproyecto:[],errortarea:!1,tareaseleccionada:null}),t=Object(m.a)(a,2),o=t[0],c=t[1],l=function(){var e=Object(I.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.get("/api/tareas",{params:{proyecto:a}});case 3:t=e.sent,c({type:"TAREAS_PROYECTO",payload:t.data.tareas}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),s=function(){var e=Object(I.a)(k.a.mark((function e(a,t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.delete("/api/tareas/".concat(a),{params:{proyecto:t}});case 3:c({type:"ELIMINAR_TAREA",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,t){return e.apply(this,arguments)}}(),u=function(){var e=Object(I.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.post("/api/tareas",a);case 3:t=e.sent,c({type:"AGREGAR_TAREA",payload:t.data.tarea}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),i=function(){var e=Object(I.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.put("/api/tareas/".concat(a._id),a);case 3:t=e.sent,c({type:"ACTUALIZAR_TAREA",payload:t.data.tarea}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(y.Provider,{value:{tareasproyecto:o.tareasproyecto,errortarea:o.errortarea,tareaseleccionada:o.tareaseleccionada,obtenerTareas:l,agregarTarea:u,validarTarea:function(){c({type:"VALIDAR_TAREA"})},eliminarTarea:s,guardarTareaActual:function(e){c({type:"TAREA_ACTUAL",payload:e})},actualizarTarea:i,limpiarTarea:function(){c({type:"LIMPIAR_TAREA"})}}},e.children)},Y=function(e,a){switch(a.type){case"MOSTRAR_ALERTA":return{alerta:a.payload};case"OCULTAR_ALERTA":return{alerta:null};default:return e}},F=function(e){var a=Object(r.useReducer)(Y,{alerta:null}),t=Object(m.a)(a,2),o=t[0],c=t[1];return n.a.createElement(p.Provider,{value:{alerta:o.alerta,mostrarAlerta:function(e,a){c({type:"MOSTRAR_ALERTA",payload:{msg:e,categoria:a}}),setTimeout((function(){c({type:"OCULTAR_ALERTA"})}),5e3)}}},e.children)},D=function(e,a){switch(a.type){case"REGISTRO_EXITOSO":return localStorage.setItem("token",a.payload.token),Object(i.a)({},e,{autenticado:!0,mensaje:null});case"CERRAR_SESION":case"REGISTRO_ERROR":case"LOGIN_ERROR":return localStorage.removeItem("token"),Object(i.a)({},e,{token:null,usuario:null,autenticado:null,mensaje:a.payload,cargando:!1});case"OBTENER_USUARIO":return Object(i.a)({},e,{autenticado:!0,usuario:a.payload,cargando:!1});case"LOGIN_EXITOSO":return localStorage.setItem("token",a.payload.token),Object(i.a)({},e,{autenticado:!0,mensaje:null,cargando:!1});default:return e}},B=function(e){e?P.defaults.headers.common["x-auth-token"]=e:delete P.defaults.headers.common["x-auth-token"]},K=function(e){var a={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},t=Object(r.useReducer)(D,a),o=Object(m.a)(t,2),c=o[0],l=o[1],s=function(){var e=Object(I.a)(k.a.mark((function e(a){var t,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.post("/api/usuarios",a);case 3:t=e.sent,l({type:"REGISTRO_EXITOSO",payload:t.data}),u(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},l({type:"REGISTRO_ERROR",payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(I.a)(k.a.mark((function e(){var a,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=localStorage.getItem("token"))&&B(a),e.prev=2,e.next=5,P.get("/api/auth");case 5:t=e.sent,l({type:"OBTENER_USUARIO",payload:t.data.usuario}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.response),l({type:"LOGIN_ERROR"});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(I.a)(k.a.mark((function e(a){var t,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.post("/api/auth",a);case 3:t=e.sent,l({type:"LOGIN_EXITOSO",payload:t.data}),u(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},l({type:"LOGIN_ERROR",payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(d.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,cargando:c.cargando,registrarUsuario:s,iniciarSesion:i,usuarioAutenticado:u,cerrarSesion:function(){l({type:"CERRAR_SESION"})}}},e.children)},z=t(36),H=function(e){var a=e.component,t=Object(z.a)(e,["component"]),o=Object(r.useContext)(d),c=o.autenticado,l=o.cargando,u=o.usuarioAutenticado;return Object(r.useEffect)((function(){u()}),[]),n.a.createElement(s.b,Object.assign({},t,{render:function(e){return c||l?n.a.createElement(a,e):n.a.createElement(s.a,{to:"/MERNTASKS-cliente/"})}}))},V=localStorage.getItem("token");V&&B(V);var X=function(){return n.a.createElement(M,null,n.a.createElement(G,null,n.a.createElement(F,null,n.a.createElement(K,null,n.a.createElement(l.a,null,n.a.createElement(s.d,null,n.a.createElement(s.b,{exact:!0,path:"/MERNTASKS-cliente/",component:b}),n.a.createElement(s.b,{exact:!0,path:"/MERNTASKS-cliente/nueva-cuenta",component:E}),n.a.createElement(H,{exact:!0,path:"/MERNTASKS-cliente/proyectos",component:x})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.06139228.chunk.js.map