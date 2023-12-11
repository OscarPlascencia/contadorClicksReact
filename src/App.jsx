import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import { useState } from 'react';

function App() {
    const [numclicks, setNumClicks] = useState(0)

    const manejarClick = () => {
        setNumClicks(numclicks + 1);
    }
    const reiniciarCOntador = () => {
        setNumClicks(0);
    }
return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
            <img 
                className='freecodecamp-logo' 
                src={freeCodeCampLogo} 
                alt="Logo de freecodecamp" 
            />
        </div>
        <div className='contenedor-principal'>
            <Contador numclicks={numclicks} />
            <Boton
                texto="Click"
                esBotonDeClick={true}
                manejarClick={manejarClick} />
            <Boton
                texto="Reiniciar"
                esBotonDeClick={false}
                manejarClick={reiniciarCOntador} />
        </div>
    </div>
);
}

export default App;
