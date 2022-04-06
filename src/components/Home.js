import React,{Component} from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';


import Clientes from './Clientes';

var buttonString= 'Ir al blog';
class Home extends Component{

    render(){

        return(
            <div id="home">
                <Slider  
                     titulo='Bienvenido al curso de React'
                    btn={buttonString}
                    size="slider-big"
                />

                 <div className='center'>    
                     <div id="content">
                         <h1 className="subheader">Ultimos Clientes</h1>
                         <Clientes
                            home='true'
                        />
                     </div>

                     <Sidebar/>
                </div>{/**END DIV CENTER */}
            </div>

           

        );


    }


}

export default Home;