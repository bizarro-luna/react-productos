import React, { Component } from "react";

import { Link } from "react-router-dom";

import Global from "../Global";
import Moment from "react-moment";
import 'moment/locale/es';
import defaultImagen from '../assets/img/user_icon.png';


class Clientes extends Component {

    url= Global.url;

    state = {
        clientes: {},
        status: null
    }



    getClientes = () => {
        var urlClientes = this.url+'clientes/page?page=1&size=8';
        fetch(urlClientes)
            .then(response => response.json())
            .then(data => {
                console.log(data.content)
                this.setState({
                    clientes: data.content,
                    status: 'success'
                });
            })
    }

    getHomeClientes = () => {
        var urlClientes = this.url+'clientes/page?page=3&size=4';
        fetch(urlClientes)
            .then(response => response.json())
            .then(data => {
                console.log(data.content)
                this.setState({
                    clientes: data.content,
                    status: 'success'
                });
            })
    }

    getClientesByTermino = (termino) => {
        var urlClientes = this.url+'react/filtrar/'+termino;
        fetch(urlClientes)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                    this.setState({
                        clientes: data,
                        status: 'success'
                    });
            })
            .catch( err =>{
                this.setState({
                    clientes: [],
                    status: 'failed'
                });
            });
    }


    componentWillMount() {
        var home= this.props.home;
        var termino = this.props.termino;

        if(home==='true'){
            this.getHomeClientes();
        }else if(termino && termino!==null && termino!==undefined){
            this.getClientesByTermino(termino);
        }
        else{
            this.getClientes();
        }


       
    }

    render() {

        if (this.state.clientes.length >= 1) {

            var clientes = this.state.clientes.map((cliente,i) => {

                return (
                    <article key={i} className="article-item img-thumbnail rounded" id="article-template">
                        <div className="image-wrap">

                            {
                                cliente.fotoHashCode!==null?(
                                    <img src={this.url+'uploads/img/'+cliente.idCliente} alt="imagen" />
                                ):(
                                    <img src={defaultImagen} alt="imagen" />
                                )
                            }


                            
                        </div>

                        <h2>{cliente.nombre} {cliente.apellido}</h2>
                        <span className="date">
                       
                            <Moment locale="es" fromNow>{cliente.createAt}</Moment>
                           
                        </span>
                        <Link to={'/blog/cliente/'+cliente.idCliente}>Detalle</Link>
                        <div className="crearfix"></div>
                    </article>
                );

            });


            return (
                <div id="clientes">
                    {clientes}
                </div>

            );
        } else if (this.state.clientes.length === 0 && this.state.status === 'success') {
            return (
                <div id="clientes">
                    <h2 className="subheader">No se encuentran clientes</h2>
                </div>
            );
        } else {
            return (
                <div id="clientes">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );
        }
    }





}

export default Clientes;