import React from "react";

import { useParams } from "react-router-dom";
import EditarProducto from "./EditarProducto";



export const EditaProducto = () => {


    var params = useParams();
    var id = params.id;
    
    return (
        <div id="editar">
            <EditarProducto
                id={id}
            />            
        </div>



    );




}
