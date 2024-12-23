import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('');

  const handleSubmitName = (event: any) => {
    event.preventDefault();
    setNome('');
  }


  return (
    <>
      <h1>Zustand</h1>

      <form onSubmit={handleSubmitName}>
        <label htmlFor="nome">Digite seu nome: </label>
        <input type='text' id='nome' value={nome} onChange={(e) => setNome(e.target.value)} required placeholder='Nome' />
        <button>Cadastrar</button>
      </form>

    </>
  )
}

export default App
