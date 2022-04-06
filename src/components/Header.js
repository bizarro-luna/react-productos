import React, { Component } from "react";

import logo from '../assets/img/logo.svg';
import { NavLink } from "react-router-dom";


let activeStyle = {
    textDecoration: "underline"
  };

let activeClassName = "underline"


class Header extends Component {

    render() {

        return (

            <header id="header">

                <div className="center">
                    {/**LOGO comentarios */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong> React
                        </span>
                    </div>
                    {/**Menu */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home"  >Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" >Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" >Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/clientes" >Clientes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/HECTOR/LUNA" >Pagina 2</NavLink>
                            </li>
                        </ul>

                    </nav>

                    {/**limpiar */}
                    <div classNameName="crearfix">

                    </div>

                </div>

            </header>


        );

    }
}

export default Header;