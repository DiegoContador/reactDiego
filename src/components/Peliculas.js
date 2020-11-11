import React, { Component } from "react";
import Pelicula from './Pelicula'
import Sidebar from './Sidebar';
import Slider from './Slider';


class Peliculas extends Component {

    state = {
    };

    cambiarTitulo = () => {

        var {peliculas} = this.state;
        // var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo = "Pikachu"

        this.setState({
            peliculas: peliculas
        })
    }

    recibirPadre = (pelicula, indice) => {

        console.log("favorita marcada");
        console.log(pelicula, indice);
        this.setState({

            favorita: pelicula
        });
    }

    // Ciclos de vida
    componentWillMount(){
        // alert("se va montar el componente")
        this.setState({
            peliculas: [
                {titulo: 'Batman vs Superman', image: "https://www.cinemascomics.com/wp-content/uploads/2020/06/snyder-cut-batman-vs-superman-960x560.jpg"},
                {titulo: 'Guason',image:"https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2019/04/collagedfdfffddf.jpg?itok=u8FqHe78"},
                {titulo: 'the Lobster', image:"https://es.web.img2.acsta.net/pictures/15/09/11/15/51/040667.jpg"}
            ],
            nombre: "Diego Contador",
            favorita: {}
        })
    }
    componentDidMount(){
        // alert("Ya se ha montado el componente")
    }

    componentWillUnmount(){
        // alert("Desmontar")
    }

    render(){

        var favorita;
        if(this.state.favorita.titulo){

            favorita = (
                <p className="favorita" style={{background:'green', color:'white',padding:'10px'}}>
                        <strong>Película favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
            );

        }else{

            favorita = (
                <p>No hay película</p>
            );
        }

        return(
            <React.Fragment> 
                <Slider
                title="Peliculas"
                size="slider-small"
                /> 
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de Películas</h2>
                        <p>Seleccion de las películas favoritas de {this.state.nombre}</p>
                        <p><button onClick={this.cambiarTitulo}>Cambiar título</button></p>

                        {/* 
                        this.state.favorita.titulo ? (
                            <p className="favorita" style={{background:'green', color:'white',padding:'10px'}}>
                                <strong>Película favorita es: </strong>
                                <span>{this.state.favorita.titulo}</span>
                            </p>
                            ) : (
                                <p>No hay película</p>
                            )
                            */}

                            {favorita}

                        <div className="articles"> 
                            {
                                this.state.peliculas.map((pelicula, i) => {

                                    return(
                                    <Pelicula key={i} pelicula={pelicula} indice={i} enviarPadre={this.recibirPadre}></Pelicula>
                                    )
                                })
                            }

                        </div>
                        
                    </div>
                    <Sidebar/>
                </div>
            </React.Fragment>

        );
    }
}

export default Peliculas;