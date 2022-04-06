import React, { Component } from "react";


class SeccionPruebas extends Component {

    contador=10;

    /** 
    constructor(props){
        super(props);

        this.state={
            contador:0
        };
    }
    */

    state={
        contador:1
    }

    sumar=()=>{
        //this.contador++;
        this.setState({
            contador:(this.state.contador+1)
        });
    }

    restar=()=>{
        //this.contador--;
        this.setState({
            contador:(this.state.contador-1)
        });
    }


    render() {
        return (

            <section id="content">
                <h2 className="subheader">Imagenes</h2>


                <h2 className="subheader">Funciones JSX basico</h2>

                <h2 className="subheader">Componentes</h2>


                <h2 className="subheader">Estado</h2>
                <p>
                   Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar"  onClick={this.sumar}    />
                    <input type="button" value="Restar" onClick={this.restar}     />
                </p>


            </section>


        );


    }



}

export default SeccionPruebas;