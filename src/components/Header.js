import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
   
            <header id="header">
                <div className="center">
                {/* Logo */}
                    <div id="logo">
        
                        <img src={logo} className="app-logo" alt="Logotipo"/>
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>
        
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas" activeClassName="active">Películas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/Camila" activeClassName="active">Página 2</NavLink>
                            </li>
                        </ul>
                    </nav>
        
                
                    <div className="clear-fix"></div>
                </div>
                
            </header>

        );
    }

}

export default Header;