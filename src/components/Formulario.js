import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {
    
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    sexoHombreRef = React.createRef();
    sexoMujerRef = React.createRef();
    bioRef = React.createRef();

    state = {

        user:{}
    };

    recibirFormulario = (e) => {

        var genero = 'hombre';

        if(this.sexoHombreRef.current.checked){
            genero = this.sexoHombreRef.current.value;
        }else if(this.sexoMujerRef.current.checked){

            genero = this.sexoMujerRef.current.value;
        }
        var user = {
            nombre:this.nombreRef.current.value,
            apellidos:this.apellidosRef.current.value,
            bio:this.bioRef.current.value,
            genero: genero
        }

        this.setState({

            user: user
        });

        e.preventDefault();

        console.log(user);

    }

    render() {

        if(this.state.user.nombre){
            var user = this.state.user;
        }

        return (
            <div id="formulario">
                    <Slider
                    
                    title="Formulario"
                    size="slider-small"

                    />
                    <div className="center">
                            <div id="content">

                                <h1 className="subheader">Formulario</h1>

                                    {this.state.user.nombre &&
                                        <div id="user-data">
                                            <p>Nombre: <strong>{user.nombre}</strong> </p>
                                            <p>Apellidos: <strong>{user.apellidos}</strong> </p>
                                            <p>Bio: <strong>{user.bio}</strong> </p>
                                            <p>Sexo: <strong>{user.genero}</strong> </p>

                                        </div>

                                    }

                                    {/* {Crear Formulario} */}
                                <form  className="full-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre</label>
                                        <input type="text" name="nombre" ref={this.nombreRef}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <input type="text" name="apellidos" ref={this.apellidosRef}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="biografia">Biografia</label>
                                        <textarea name="biografia" id="" cols="30" rows="10" ref={this.bioRef}></textarea>
                                    </div>

                                    <div className="form-group radiobuttons">

                                        <input type="radio" name="genero" value="hombre" ref={this.sexoHombreRef}/>Hombre
                                        <input type="radio" name="genero" value="mujer" ref={this.sexoMujerRef}/>Mujer
                                    </div>

                                    <div className="clear-fix"></div>

                                    <input type="submit" value="Enviar" className="btn btn-success"/>

                                </form>

                            </div>
                        <Sidebar/>

                    </div>
            </div>

        );
    }

}

export default Formulario;