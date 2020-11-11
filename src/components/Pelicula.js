import React, { Component } from 'react';

class Pelicula extends Component {

    marcarFavorita = () => {
        this.props.enviarPadre(this.props.pelicula, this.props.indice);
    }

    render() {

        const {
            titulo,
            image
        } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">

            <div className="image-wrap">
                <img src={image} alt={titulo}/>
            </div>

            <h2>{titulo}</h2>
            <span className="date">Hace 5 minutos</span>

            <button onClick={this.marcarFavorita}>
                Marcar como favorita
            </button>

            <div className="clear-fix">

            </div>


        </article>
        );
    }
}

export default Pelicula;