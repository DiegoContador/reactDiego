import React, {Component} from 'react';

class MiComponente extends Component {

    render(){

        let receta = {

            nombre: "Pizza",
            ingredientes: ['tomate', 'queso', 'jamón'],
            calorias: 400
        };

       return(
           <div className="mi-componente">
               <h1>{receta.nombre}</h1>
               <hr/>
                <h2>{`Calorias: `+receta.calorias}</h2>
                {this.props.saludo &&
                    <React.Fragment>
                    <h1>Desde una PROPS</h1>
                    <h3>{this.props.saludo}</h3>
                    </React.Fragment>
                }
                <hr/>
                <ol>
                {
                    receta.ingredientes.map((ingrediente, i) =>{
                        return (
                        <li key={i}>{ingrediente}</li>
                        );

                    })
                }

                </ol>
           </div>
                  ); 
    }
}

export default MiComponente;