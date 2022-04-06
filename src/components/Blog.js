import React,{Component} from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';
import Clientes from "./Clientes";


var buttonString= 'Ir al blog';
class Blog extends Component{


    render(){
        
               
        return(
            <div id="blog">
                <Slider  
                     titulo='Blog'
                     size='slider-small'
                />

                 <div className='center'>    
                     <div id="content">
                        {/**Listado de clientes que vendran del api rest */}
                        
                        <Clientes/>

                     </div>

                     <Sidebar
                        blog='true'
                     />
                </div>{/**END DIV CENTER */}
            </div>

           

        );


    }


}

export default Blog;