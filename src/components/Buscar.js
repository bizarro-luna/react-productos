import React,{Component} from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';
import Clientes from "./Clientes";
import { useParams } from "react-router-dom";

var buttonString= 'Ir al blog';

//Cuando quiera cachar un valor desde los parametros 
export const BuscarCliente=()=>{
    var params= useParams();
    var buscar= params.termino
    console.log(buscar);
    return (
        <div id="blog">
        <Slider  
             titulo={'Busqueda: ' + buscar }
             size='slider-small'
        />

         <div className='center'>    
             <div id="content">
                {/**Listado de clientes que vendran del api rest */}
                
                <Clientes
                    termino={buscar}
                />

             </div>

             <Sidebar
                blog='true'
             />
        </div>{/**END DIV CENTER */}
    </div>


    );
}

