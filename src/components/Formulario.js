import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';
var buttonString = 'Ir al blog';
class Formulario extends Component {

    //Referencia  alos campos del formulario
    nombreRef=React.createRef();
    apellidosRef=React.createRef();
    bioRef=React.createRef();
    generoHombreRef=React.createRef();
    generoMujerRef=React.createRef();
    generoNARef=React.createRef();

    state={
        usuario:{}
    };

    recibirFormulario=(e)=>{
        e.preventDefault();//Para que no realice como tal el submit
        console.log('Formulario Enviado');


        var genero='H';

        if(this.generoHombreRef.current.checked){
            genero=this.generoHombreRef.current.value;
        }else if(this.generoMujerRef.current.checked ){
            genero=this.generoMujerRef.current.value;
        }else{
            genero=this.generoNARef.current.value;
        }


        var usuarioNuevo={
            nombre:this.nombreRef.current.value,
            apellidos:this.apellidosRef.current.value,
            bio:this.bioRef.current.value,
            genero:genero
        }

        this.setState({
            usuario:usuarioNuevo
        });
        console.log(usuarioNuevo);

    }



    render() {

       


        if(this.state.usuario.nombre){
            var usuario= this.state.usuario;

        }

        return (
            <div id="formulario">
                <Slider
                    titulo='Formulario'
                    size='slider-small'
                />

                <div className='center'>
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {/**Mostrar los datos del formulario */}
                        {this.state.usuario.nombre &&
                            <div id="user-data">
                                <p>Nombre: <strong>{usuario.nombre}</strong></p>
                                <p>Apellidos: <strong>{usuario.apellidos}</strong></p>
                                <p>Bio: <strong>{usuario.bio}</strong></p>
                                <p>Genero: <strong>{usuario.genero}</strong></p>

                            </div>

                        }


                        {/**Contenido del formulario*/}
                        <form action="" className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}  >
                            <div className="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>
                            <div className="form-group">
                                <label for="apellido">Apellidos</label>
                                <input type="text" name="apellido" ref={this.apellidosRef} />
                            </div>
                            <div className="form-group">
                                <label for="bio">Biografia</label>
                                <textarea name="bio" id="bio" cols="30" rows="10" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="H"  ref={this.generoHombreRef} />Hombre
                                <input type="radio" name="genero" value="M"  ref={this.generoMujerRef} />Mujer
                                <input type="radio" name="genero" value="N" ref={this.generoNARef} />N/A
                            </div>

                            <div className="crearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>
                    </div>

                    <Sidebar
                        blog='false'
                    />
                </div>{/**END DIV CENTER */}
            </div>



        );


    }


}

export default Formulario;