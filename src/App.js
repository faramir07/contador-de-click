import './App.css';
import Boton from './componentes/Boton.jsx'
import Contador from './componentes/Contador';
import { useState } from "react";

function App() {
  
  const [numclick, setNumclick] = useState(0);

  const manejarClick = () => {
    setNumclick(numclick + 1);
  };

  const reiniciarContador = () => {
    setNumclick(0);
  };

  return (
    <div className="App">
        <div className='contitulo'>
          <h1>Contador De Click</h1>
        </div>
        <div className='contcontador'>
          <Contador numclick={numclick}/>
          <Boton texto='Click' esBotonDeClick={true} manejarClic={manejarClick}/>  
          <Boton texto='Reiniciar' esBotonDeClick={false} manejarClic={reiniciarContador}/>
        </div>
    </div>
  );
}

export default App;
