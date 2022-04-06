import React from "react";

import { useParams } from "react-router-dom";

import Sidebar from "./Sidebar";
import DetalleCliente from "./DetalleCliente";

export const Detalle = () => {


    var params = useParams();
    var id = params.id;
    
    return (
        <div id="detalle">
            <DetalleCliente
                id={id}
            />



            <Sidebar />

            <div className="crearfix">

            </div>
        </div>



    );




}
