import React,{Component} from "react";
import {Link} from 'react-router-dom'


class Slider extends Component{


    render() {
        var clase= this.props.size;
        return(
            
            <div id="slider" className={clase}    >
                <h1>{this.props.titulo}    </h1>
                {this.props.btn &&
                    <Link to="/blog" className="btn-white">{this.props.btn}</Link>
                }
                
                
             </div>

        );


    }
}


export default Slider; 