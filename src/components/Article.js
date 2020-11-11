import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import 'moment/locale/es';
import Moment from 'react-moment';
import imagen from '../assets/images/papas.jpeg';
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';

class Article extends Component {

    url = Global.url;

    state = {

        article: false,
        status: null
    }

    componentWillMount(){

        this.getArticle();
    }
    getArticle = () => {

        var id = this.props.match.params.id;

        axios.get(this.url + 'articulo/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                });

            }).catch(err => {

                this.setState({

                    article: false,
                    status: 'success'
                });
            });
    }

    deleteArticle = (id) => {

        swal({
            title: "Estás seguro de eliminar?",
            text: "Una vez eliminado no hay vuelta atrás",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                axios.delete(this.url + 'articulo/' + id)
                     .then(res => {

                        this.setState({

                            article: res.data.article,
                            status: 'deleted'
                        });

                        swal(

                            'Artículo borrado',
                            "El artículo fue eliminado con éxito",
                            'success'
                        );

                    });

            } else {
              swal("Artículo del blog No se ha borrado");
            }
          });

    }

    render() {

        if(this.state.status === "deleted"){

            return(
                <Redirect to="/blog"/>
            )
        }

        var article = this.state.article;

        return (
            <div className="center">

                <section id="content">

                    {this.state.article &&

                        <article className="article-item article-detail">

                        <div className="image-wrap">
                            {
                                article.image !== null ? (
                                    <img src={this.url+'get-imagen/' + article.image} alt={article.image}/>
                                ) : (
                                    <img src={imagen} alt={article.title}/>
                                )
                            }
                        </div>

                        <h1 className="subheader">{article.title}</h1>

                        <span className="date">
                            <Moment locale="es" fromNow>{article.fecha}</Moment>
                        </span>

                        <p>{article.content}</p>

                        <button className="btn btn-danger" onClick={() => {

                            this.deleteArticle(article._id)
                        }}>Eliminar</button>
                        <Link type="button" to={"/blog/editar/" + article._id} className="btn btn-warning">Editar</Link>

                        <div className="clear-fix">

                        </div>

                        </article>
                                                    
                    }

                    {!this.state.article && this.state.status === 'success' &&

                        <div id="article">

                            <h2 className="subheader">
                                El artíulo no existe
                            </h2>
                        </div>


                    }
                    {this.state.status ==  null &&

                        <div id="article">

                            <h2 className="subheader">
                                Cargando...
                            </h2>
                        </div>


                        }

                </section>

                <Sidebar></Sidebar>
            </div>

        );
    }
}

export default Article;