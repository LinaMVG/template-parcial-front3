import React, {useState} from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input1.length>= 3 && !input1.startsWith(' ') && input2.trim().length >= 6) {
      setShowError(false);
      setSubmitted(true);
    } else {
      setShowError(true);
      setSubmitted(false);
    }
  };

  return (
  <div className="app-container">
    <h1>Selecciona un color</h1>
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">

        <label className="form-label">Nombre (Input Uno):</label>
        <input type="text" placeholder='Ingresa tu nombre (Primer Input)' value={input1} onChange={(e) => setInput1(e.target.value)} className="form-input"/>

        <label className="form-label">Color favorito (Input Dos):</label>
        <input type="text" placeholder='Ingresa tu color favorito(Segundo Input)' value={input2} onChange={(e) => setInput2(e.target.value)} className="form-input"/>

      </div>

      <button type='submit' className="submit-button">ENVIAR</button>

    </form>

    {showError && <p className="error-message"> Por favor chequea que la información sea correcta.</p>}

    {submitted && <Card input1={input1} input2={input2} />}

    {/* <Card></Card> */}
  </div>
  )
}

export default App
