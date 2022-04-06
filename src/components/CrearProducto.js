import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import swal from "sweetalert";
import Global from "../Global";
import Sidebar from "./Sidebar";
//Validacion formularios y alertas

class CrearProducto extends Component {

    url = Global.url;
    //Referencian para el formulario
    nombreRef = React.createRef();
    precioRef = React.createRef();

    state = {
        producto: {},
        status: null
    };

    componentWillMount() {
        //variable para validar el formulario
        this.validator = new SimpleReactValidator({
            messages: {
              required: 'Este campo es requerido'
            }
          });
    }

    cambiarEstado = () => {
        this.setState({
            producto: {
                nombre: this.nombreRef.current.value,
                precio: this.precioRef.current.value
            }

            
        });
        //para mostrar los mensajes de error
        this.validator.showMessages();
        this.forceUpdate();
        //console.log(this.state);
    }

    guardarProducto = (e) => {
        e.preventDefault();
        alert(this.nombreRef.current.value);

        //Llenar state con los datos del formulario
        this.cambiarEstado();

        if (this.validator.allValid()) {



            //Hacer una peticion http post para guardar el acticulo
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.producto)
            };
            fetch(this.url + 'react/producto', requestOptions)
                .then(response => {

                    if (response.status === 401) {
                        alert('No tiene autorización');
                    }

                    return response.json();

                })
                .then(data => {

                    if (data.nombre) {
                        this.setState({ producto: data, status: 'waiting' });

                        swal(
                            'Articulo Creadro',
                            'El articulo ha sido creado correctamente',
                            'success'
                        );

                        //Subir imagen
                        if (this.state.archivoSeleccionado !== null) {
                            //Sacar el id de el articulo guardado
                            var id = data.idProducto;

                            //crear formdata y añadir al video
                            const formData = new FormData();

                            formData.append("archivo", this.state.archivoSeleccionado);
                            formData.append("id", id.toString());
                            const url = this.url + 'react/producto/upload-img';

                            fetch(url, { method: 'PUT', body: formData })
                                .then(res => {

                                    if (res.status !== 201) {
                                        alert("Error estatus " + res.status);
                                    }

                                    return res.json()

                                })
                                .catch(error => alert(error))
                                .then(p => {
                                    if (p.fotoHashCode) {
                                        this.setState({ producto: p, status: 'success' });
                                    } else {
                                        this.setState({ producto: p, status: 'failed' });
                                    }
                                });



                        } else {
                            this.setState({ producto: data, status: 'success' });
                        }






                    } else {
                        this.setState({ status: 'failed' });
                    }



                })
                .catch(error => {

                    console.error('There was an error!', error);
                });

        }else{
            this.setState({ status: 'failed' });
            //para mostrar los mensajes de error
            this.validator.showMessages();
            this.forceUpdate();
        }
    };


    archivoSeleccionado = (event) => {

        this.setState({
            archivoSeleccionado: event.target.files[0]
        });

        console.log(this.state);

    }



    render() {
        if (this.state.status === 'success') {
            return <Navigate to='/blog' />;
        }

        return (

            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Producto</h1>


                    <form action="" className="mid-form" onSubmit={this.guardarProducto}>

                        <div className="form-group" >
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.nombreRef} onChange={this.cambiarEstado} />
                            {this.validator.message('nombre', this.state.producto.nombre, 'required')}
                        </div>
                        {/** 
                        <div className="form-group" >
                            <label htmlFor="descripcion">Descripcion</label>
                            <textarea name="descripcion"  ></textarea>
                        </div>
                        */}
                        <div className="form-group" >
                            <label htmlFor="precio">Precio</label>
                            <input type="number" name="precio" ref={this.precioRef} onChange={this.cambiarEstado} />
                            {this.validator.message('precio', this.state.producto.precio, 'required')}
                        </div>

                        <div className="form-group" >
                            <label htmlFor="archivoSeleccionado">Imagen</label>
                            <input type="file" name="archivoSeleccionado" onChange={this.archivoSeleccionado} />
                            {/*this.validator.message('archivoSeleccionado', this.state.producto.archivoSeleccionado, 'required')*/}
                        </div>


                        <input type="submit" value="Guardar" className="btn btn-success" />

                    </form>



                </section>
                <Sidebar />
            </div>

        );


    }



}

export default CrearProducto;