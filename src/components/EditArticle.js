import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Global from '../Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import imagen from '../assets/images/papas.jpeg';

class EditArticle extends Component {
    
    url = Global.url;

    titleRef = React.createRef();

    contentRef = React.createRef();

    articleId = null

    state = {


        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount(){

        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);
        this.validator = new SimpleReactValidator({
            messages: {
              required: 'Este campo es requerido',
            },
          });
    }

    getArticle = (id) => {

        axios.get(this.url + 'articulo/' + id)
            .then(res => {

                this.setState({

                    article: res.data.article
                })


            });

    }

    changeState = () => {

        this.setState({

            article:{
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });

        this.validator.showMessages();
        this.forceUpdate();

    }
    saveArticle = (e) => {

        e.preventDefault();
        
        this.changeState();

        if(this.validator.allValid()){

        axios.put(this.url + 'articulo/' + this.articleId, this.state.article)
            .then(res => {

                if(res.data.article){

                    this.setState({

                        article: res.data.article,
                        status: 'waiting'
                    });

                    swal(
                        'Artículo creado',
                        'El artículo ha sido creado correctamente',
                        'success'
                    );
                    // Cargar Imagen

                    if(this.state.selectedFile !== null){
                        
                        // Sacar el id del article
                        var articleId = this.state.article._id

                        // Crear form data
                        const formData = new FormData();

                        formData.append(
                            'file0',
                            this.state.selectedFile,
                            this.state.selectedFile.name
                        );

                        // hacer peticion ajax

                        axios.post(this.url + 'cargar-imagen/' + articleId, formData)
                            .then(res => {

                                if(res.data.article){

                                    this.setState({

                                        article: res.data.article,
                                        status: 'success'
                                    });
                                }else{
                                    this.setState({

                                        article: res.data.article,
                                        status: 'failed'
                                    });

                                }
                                
                            });

                    }else{

                        this.setState({

                            status: 'success'
                        });
                    }

                }else{

                    this.setState({

                        status: 'failed'
                    });
                }
            });

        }else{

            this.setState({

                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();

        }
    }

    fileChange = (event) => {

        this.setState({

            selectedFile: event.target.files[0]
        });

        console.log(this.state);
    }

    render() {

        if(this.state.status === 'success'){

            return(
                <Redirect to="/blog"></Redirect>
            )
        }

        var article = this.state.article;

        return (

            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Artículo</h1>

                    {this.state.article.title &&
                            <form className="full-form"  onSubmit={this.saveArticle}>
                            <div className="form-group">

                                <label htmlFor="title">Título</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState}/>
                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space') }
                            </div>

                            <div className="form-group">

                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" id="" defaultValue={article.content} cols="30" rows="10" ref={this.contentRef} onChange={this.changeState}></textarea>

                                {this.validator.message('content', this.state.article.content, 'required|alpha_num_space') }

                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>

                                    <div className="image-wrap">
                                        {
                                            article.image !== null ? (
                                                <img src={this.url+'get-imagen/' + article.image} alt={article.image} className="thumb"/>
                                            ) : (
                                                <img src={imagen} alt={article.title} className="thumb"/>
                                            )
                                        }
                                    </div>
                                <input type="file" name="file0" onChange={this.fileChange}/>
                            </div>

                            <input type="submit" value="Guardar" className="btn btn-success"/>
                        </form>

                    }

                    {!this.state.article.title &&

                        <h2 className="subheader">Cargando...</h2>
                    }
                    

                </section>

                <Sidebar/>

            </div>
        );
    }
}

export default EditArticle;