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