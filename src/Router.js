import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Error from './components/Error404';
import MiComponente from './components/Micomponente';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Home from './components/Home';
import Formulario from "./components/Formulario";
import Peliculas from "./components/Peliculas";
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {

    render() {
 
        return (
            <BrowserRouter>
                <Header/>


                <Switch>

                    <Route exact path="/formulario" component={Formulario}/>
                    <Route exact path="/Peliculas" component={Peliculas}/>
                    <Route exact path="/blog/articulo/:id" component={Article}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/blog/editar/:id" component={EditArticle}/>
                    <Route exact path="/blog/crear-articulo" component={CreateArticle}/>
                    <Route exact path="/blog/busqueda/:search" component={Search}/>
                    <Route exact path="/redirect/:search" render={
                        (props) => {
                            var search = props.match.params.search;

                            return(<Redirect to={'/blog/busqueda/' + search}/>
                            );

                        }
                    }/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola desde la ruta: Página 1</h1>
                            <MiComponente saludo="Hola amigo"/>

                        </React.Fragment>
   
                    )}/>

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        
                        var nombre = props.match.params.nombre;
                        var ape = props.match.params.apellidos;

                        return(
                        <div id="content">
                        <h1>Página de pruebas</h1>
                        <h2>{nombre && !ape &&
                                <span>{nombre}</span>

                        }{

                            nombre && ape &&
                            <span>{nombre + ' '+ ape}</span>
                        }
                        </h2>
                        </div>
                    );
                    }}/>

                </Switch>


                <div className="clear-fix"></div>



                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;