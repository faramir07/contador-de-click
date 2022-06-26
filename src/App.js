import './App.css';
import Boton from './componentes/Boton.jsx'

function App() {

  const manejarClic = () => {
    console.log('clic');
  }

  const reiniciarContador = () => {
    console.log('reiniciar');
  }

  return (
    <div className="App">
        <div className='contitulo'>
          <h1>Contador De Clics</h1>
        </div>
        <div className='contcontador'>
          <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic}/>    
          <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}/>
        </div>
    </div>
  );
}

export default App;
