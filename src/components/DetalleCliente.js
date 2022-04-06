import React, { Component } from "react";
import Moment from "react-moment";
import 'moment/locale/es';
import { Navigate,Link } from 'react-router-dom';
import Global from "../Global";
import defaultImagen from '../assets/img/user_icon.png';
import swal from "sweetalert";



class DetalleCliente extends Component {


    url = Global.url;

    state = {
        cliente: false,
        status: null
    }

    mensaje = '';

    getCliente = (id) => {

        fetch(this.url + 'react/producto/' + id)
            .then(response => response.json())
            .then(c => {
                console.log(c);
                if (c.mensaje !== undefined) {
                    console.log(c.mensaje);
                    this.setState({
                        cliente: false,
                        status: 'success'
                    });
                } else {
                    this.setState({
                        cliente: c,
                        status: 'success'
                    });
                }
            })
            .catch(err => {
                this.setState({
                    cliente: false,
                    status: 'success'
                });
            })
            ;


    }

    eliminarProducto = (id) => {


        swal({
            title: "¿Estas seguro?",
            text: "Una vez eliminado, no se recuperara el producto!",
            icon: "warning",
            buttons: {
                confirm: {
                    text: "Aceptar",
                    value: true,
                    closeModal: true
                },
                cancel: {
                    text: "Cancelar",
                    value: null,
                    visible: true,
                    closeModal: true,
                }
                 
            },
            dangerMode: true,
        }).then((result) => {
            if (result) {

                //alert(id);
                fetch(this.url + 'react/producto/'+id, { method: 'DELETE' })
                    .then(resp => {
                        if (resp.status === 204) {

                            this.setState({
                                cliente: null,
                                status: 'deleted'
                            });

                            swal(
                                'Articulo Eliminado',
                                'El articulo ha sido eliminado correctamente',
                                'success'
                            );

                        } else {
                            //alert("Hubo un error al intentar eliminar");
                            swal({
                                icon: 'error',
                                title: 'Error',
                                text: 'Error en el servidor',
                            });

                        }
                    });

            }

        });
    }


    componentWillMount() {
        var id = this.props.id;
        console.log("componentWillMount id del cliente  es " + id);
        this.getCliente(id);

    }



    render() {


        if (this.state.status === 'deleted') {
            return <Navigate to="/blog" />
        }


        var cliente = this.state.cliente;


        return (
            <div className="center">
                <section id="content">
                    {this.state.cliente &&

                        <article className="article-item article-detalle" >
                            <div className="image-wrap">
                                {
                                    cliente.fotoHashCode !== null ? (
                                        <img src={this.url + 'react/producto/uploads/img/' + cliente.idProducto} alt="imagen" />
                                    ) : (
                                        <img src={defaultImagen} alt="imagen" />
                                    )
                                }
                            </div>

                            <h1 className="subheader">{cliente.nombre}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{cliente.fechaCreacion}</Moment>
                            </span>
                            <p>{/*cliente.email*/}</p>
                            <p>{/*cliente.region.nombre*/}</p>

                            <Link to={'/blog/editar/'+cliente.idProducto}  className="btn btn-warning">Editar</Link>
                            <button onClick={

                                () => {
                                    this.eliminarProducto(cliente.idProducto);
                                }

                            } className="btn btn-danger">Eliminar</button>
                            <div className="crearfix"></div>
                        </article>


                    }

                    {!this.state.cliente && this.state.status === 'success' &&
                        <div>
                            <h2 className="subheader"> El cliente no existe </h2>
                            <p>Intentalo de nuevo mas tarde </p>
                        </div>

                    }

                    {this.state.status == null &&
                        <div>
                            <h2 className="subheader"> Cargando.... </h2>
                            <p>Espere unos segundos </p>
                        </div>

                    }

                </section>
            </div>
        );

    }


}


export default DetalleCliente;