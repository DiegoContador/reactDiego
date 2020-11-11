import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import logo from '../assets/images/logo.svg';
import Moment from 'react-moment';
import 'moment/locale/es';
import {Link} from 'react-router-dom';


class Articles extends Component {
    url = Global.url;

    state = {

        articulosApi: [],
        status: null
    }
    componentDidMount(){
         
        var home = this.props.home;
        var search = this.props.search;

        if(home === 'true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);
            
        }else{
            this.getArticles();
        }

        
    }

    getLastArticles = () => {
        axios.get(this.url + "articulos/last")
            .then(res => {
                this.setState({
                    articulosApi: res.data.articles,
                    status: 'success'
                });
            });
    }

    getArticles = () => {
        axios.get(this.url + "articulos")
            .then(res => {
                this.setState({
                    articulosApi: res.data.articles,
                    status: 'success'
                });
            });
    }

    getArticlesBySearch = (busqueda) => {
        axios.get(this.url + "search/" + busqueda)
            .then(res => {

                    this.setState({
                        articulosApi: res.data.articles,
                        status: 'success'
                    });
 
            })
            
            .catch(error => {

                this.setState({
                    articulosApi: [],
                    status: 'success'
                });
            })
            ;
    }
    render() {
        if(this.state.articulosApi.length >= 1){
            var listArticles = this.state.articulosApi.map((article) => {
                return(
                    <article key={article._id} className="article-item" id="article-template">

                            <div className="image-wrap">

                                {article.image !== null ? (
                                    <img src={this.url + 'get-imagen/' + article.image} alt={article.image}/>

                                ) : (
                                    <img src={logo} alt="No hay imagen original"/>

                                )
                                }
                            </div>

                            <h1 className="subheader">{article.title}</h1>

                            <span className="date"><Moment locale="es" fromNow>{article.fecha}</Moment></span>

                            <Link to={'blog/articulo/' + article._id}>Leer más</Link>
                            
                            <div className="clear-fix">

                            </div>    
                        </article>
                );
            });
            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
        }else if(this.state.articulosApi.length === 0 && this.state.status === 'success' ){
            return (
                <div id="articles">
                    <h2 className="subheader">No hay artículos</h2>
                </div>
            );
        }else{
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                </div>
            );
        }
    }
}
export default Articles;