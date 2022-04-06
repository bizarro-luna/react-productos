import React, { Component } from "react";
import {Link} from 'react-router-dom';


class Pelicula extends Component {


    marcar=()=>{
        this.props.marcarFavorito(this.props.cliente,this.props.contador);

    }

    render() {
        
        const { nombre, imagen } = this.props.cliente;
        let i= this.props.contador;

        
        return (

            <article className="article-item img-thumbnail rounded" id="article-template" >
                <div className="image-wrap">
                    <img src={imagen + (1 + i)} alt={nombre} />
                </div>

                <h2>{nombre}</h2>
                <span className="date">
                    Hace cinco minutos
                </span>
                <Link to="/blog">Detalle</Link>

                <button onClick={this.marcar}>
                    Marcar como favorito
                </button>

                <div className="crearfix"></div>
            </article>

        );

    }


}

export default Pelicula;