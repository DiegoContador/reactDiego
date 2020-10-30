import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// Componentes
import MiComponente from "./components/Micomponente";
import Peliculas from "./components/Peliculas";
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2> Hola, soy {nombre} </h2>{" "}
      <h2>
        {" "}
        Tengo {edad} años{" "}
      </h2>{" "}
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Camila";

  return (
    <div className="App">

      <Header/>
      <Slider/>
      

      <div className="center">
          <section id="content">
            
            <SeccionPruebas/>
            <MiComponente/>
            <Peliculas/>

          
          </section>

            <Sidebar/>  

            <div className="clear-fix"></div>
      
      </div>


      <Footer/>
      
    </div>
  );
}

export default App;
