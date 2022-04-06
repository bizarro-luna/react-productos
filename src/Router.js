import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams, Navigate } from "react-router-dom";



//Importaciones de mis componenetes
import MiComponente from './components/MiComponente';
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Header from './components/Header';
import Blog from "./components/Blog";
import Footer from './components/Footer';
import Home from "./components/Home";
import Formulario from "./components/Formulario";
import { BuscarCliente } from "./components/Buscar";
import {Detalle} from "./components/Detalle";
import CrearProducto from "./components/CrearProducto";
import {EditaProducto} from "./components/EditaProducto";



class Router extends Component {




    render() {

        return (



            <BrowserRouter>
                <Header />








                {/**Configurar rutas y paginas v6 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/cliente/:id" element={ <ClienteDetalleRedirect/> } />
                    <Route path="/blog/crear" element={ <CrearProducto/> } />

                    <Route path="/blog/editar/:id" element={ <EditaProducto/> } />

                    <Route path="/blog/busqueda/:termino" element={<BuscarCliente />} />
                    <Route path="/redirect/:termino" element={<BusquedaRedirect/>}  />

                    <Route path="/blog/detalle/:id" element={<Detalle />} />

                    <Route path="/formulario" element={<Formulario/>} />
                    <Route path="/clientes" element={<Peliculas/>} />
                    

                    <Route path="/segunda-ruta" element={<MiComponente />} />
                    <Route path="/codigo-estatico" element={
                        <main style={{ padding: "1rem" }}>
                            <h1>Hola mundo desde el Router</h1>
                            <MiComponente saludo="Hola desde Router" />
                        </main>
                    }
                    />
                    <Route path="/pruebas/:nombre/:apellidos" element={<MetodoParametros />} />

                    <Route path='*' element={<Error />} />

                </Routes>




                <div className='crearfix'></div>

                <Footer />
            </BrowserRouter>

        );


    }




}

const MetodoParametros=()=> {
    let params = useParams();
    let nombre = params.nombre;
    let apellidos = params.apellidos;

    return (
        <div id="content">
            <h1 className="subheader">Página de pruebas</h1>
            <h2>
                {nombre && !apellidos &&
                    <span>{nombre}</span>

                }
                {nombre && apellidos &&

                    <span>{nombre} {apellidos}</span>

                }
            </h2>
        </div>
    );
}

const BusquedaRedirect=()=>{
    let params = useParams();
    let termino= params.termino;

    return ( <Navigate to={'/blog/busqueda/'+termino} />   );


}

const ClienteDetalleRedirect=()=>{
    let params = useParams();
    let id= params.id;

    return ( <Navigate to={'/blog/detalle/'+id} />   );
}


export default Router;