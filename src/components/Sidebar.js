import React,{Component} from "react";
import {Navigate,Link} from 'react-router-dom';

class Sidebar extends Component{


    buscarRef= React.createRef();

    //Metodo para redirigir a buscar el cliente
    redirectToBuscar=(e)=>{
        e.preventDefault();
        
        this.setState({
            buscar:this.buscarRef.current.value,
            redirect:true
        });

    }

    state={
        buscar:"",
        redirect:false
    };


    render(){

        if(this.state.redirect){
            return(
                <Navigate to={'/redirect/'+this.state.buscar} />
            );
        }

        return (
            <aside id="sidebar">
            {this.props.blog==='true' &&

                <div id="nav-blog" className="sidebar-item">
                <h3>Puedes hacer esto</h3>
                <Link to={'/blog/crear'} className="btn btn-success">Crear Producto</Link>

                </div>

            }
           
           

            <div id="search" className="sidebar-item">
                <h3>Buscador</h3>
                <p>Encuentra el cliente que buscas</p>
                <form onSubmit={this.redirectToBuscar}>
                    <input type="text" name="buscar" ref={this.buscarRef} />
                     <input type="submit" name="submit" value="buscar" className="btn"/>
                </form>
            </div>


        </aside>

        );


    }



}

export default Sidebar;