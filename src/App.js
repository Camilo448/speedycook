import './App.css';
import Boton from './components/boton';
import Boton2 from './components/boton2';
import Display from './components/display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const inputAdd = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('aja y el numero');
    }
  };

  return (
    <div className="App">
      <div className='main--container'>
        <h1>Speedy Cook</h1>
      </div>
      <div className='calculator--container'>
        <Display input={input}/>
        <div className='fila'>
          <Boton manejarClick={inputAdd}>Tiempo</Boton>
          <Boton2 manejarClick={inputAdd}>+</Boton2>
          <Boton2 manejarClick={inputAdd}>-</Boton2>
          <Boton manejarClick={inputAdd}>Programar</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={inputAdd}>Arroz</Boton>
          <Boton manejarClick={inputAdd}>Granos</Boton>
          <Boton manejarClick={inputAdd}>Pollo</Boton>
          <Boton manejarClick={inputAdd}>Carne</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={inputAdd}>Vapor</Boton>
          <Boton manejarClick={inputAdd}>Saltear</Boton>
          <Boton manejarClick={inputAdd}>Estofado</Boton>
          <Boton manejarClick={inputAdd}>Coccion lenta</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calculateResult}>Hornear</Boton>
          <Boton manejarClick={inputAdd}>Yogurt</Boton>
          <Boton manejarClick={inputAdd}>Manual</Boton>
          <Boton manejarClick={inputAdd}>ON/OFF</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
