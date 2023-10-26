import React from 'react'
import '../stylesheets/boton2.css'

function Boton2(props) { 

  const isOperation = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }
  return (
    <div
      className={`container--button2 ${isOperation(props.children) ? 'operation' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton2;