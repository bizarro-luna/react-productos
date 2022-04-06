import React, { Component } from "react";

import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {


    state = {};


    //metodo funcion de flecha, para cambiar el estado de una variable en el state
    cambiarTitulo = () => {
        //Toma el objeto de clientes
        var { clientes } = this.state;
        // var random= Math.floor(Math.random()*3);
        clientes[0].nombre = 'Juan Escutia';

        //Guardar en el State una varaible
        this.setState({
            clientes: clientes
        });

    }

    favorito = (cliente, contador) => {
        console.log('Favorita Marcada ');
        console.log(cliente, contador);
        this.setState({
            favorito: cliente
        });
    }

    //Metodo para realizar algo antes de que este cargado el DOM
    componentWillMount() {
        //alert('Se va a montar el componente de pelicula');
        this.setState({
            clientes: [
                { nombre: 'Pedro Hernandez', imagen: 'https://luna-clientes-heroku.herokuapp.com/api/uploads/img/' },
                { nombre: 'Luis Luna', imagen: 'https://luna-clientes-heroku.herokuapp.com/api/uploads/img/' },
                { nombre: 'Juan Hernandez', imagen: 'https://luna-clientes-heroku.herokuapp.com/api/uploads/img/' }
            ],
            nombre: 'Erick Hector Luna Ramirez',
            favorito: ''
        });
    }

    //Metodo para realizar algo cuando ya esta cargado el Dom
    componentDidMount() {
        //alert('Aqui ya se cargo el componente');
    }

    //Cuando se va a desmontar un componente
    componentWillUnmount() {
        //alert('ME voy a desmontar');

    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        var favorito;
        if (this.state.favorito) {
            favorito = (
                <p className="favorito" style={pStyle}>
                    <strong>El cliente favorito es : </strong>
                    <span>{this.state.favorito.nombre}</span>
                </p>
            );
        } else {

            favorito = (
                <p>NO HAY CLIENTE FAVORITO</p>
            )

        }


        return (
            <React.Fragment>
                <Slider
                    titulo='Clientes'
                    size='slider-small'
                />


                <div className="center">
                    <div id="content" className="peliculas">
                        {/**
                        <h2 className="subheader">Clientes </h2>
                        <p>Clientes de {this.state.nombre}</p> */}
                        <p>
                            <button onClick={this.cambiarTitulo} >Cambiar nombre</button>
                        </p>

                        {/**Validacion React */}
                        {/*this.state.favorito ? (
                    <p className="favorito" style={pStyle}>
                        <strong>El cliente favorito es : </strong>
                        <span>{this.state.favorito.nombre}</span>
                    </p>
                ) :
                    (
                        <p>NO HAY CLIENTE FAVORITO</p>
                    )
                   
                 */}
                        {favorito}



                        {/**Crear componenete de peliculas */}
                        <div id="articles" className="peliculas">
                            {
                                this.state.clientes.map((cliente, i) => {
                                    return (

                                        <Pelicula
                                            key={i}
                                            contador={i}
                                            cliente={cliente}
                                            marcarFavorito={this.favorito}
                                        />

                                    )
                                })

                            }
                        </div>

                    </div>
                    <Sidebar
                        blog='false'
                    />
                </div>
            </React.Fragment>
        );

    }



}


export default Peliculas