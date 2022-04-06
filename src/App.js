import logo from './logo.svg';
import './App.css';
import Router from './Router';

//Importaciones de mis componenetes
//import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

//import SeccionPruebas from './components/SeccionPruebas';


function holaMundo(nombre,edad){
  let presentacion=
            <di>

                <h2>Hola, soy {nombre} desde holamundo</h2>
                <h3>Tengo {edad}</h3> 
            </di>;
  return presentacion;
}


function App() {

  let nombre="Erick Hector Luna Ramirez";
  
  



  return (
    <div className="App">
           
        <Router/>
        {/*
          <Peliculas/>
        */} 
    </div>

  );
}

export default App;
