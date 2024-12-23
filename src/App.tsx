import { useState } from 'react';
import './App.css';
import userStore from './store/userStore';

function App() {
  const [nome, setNome] = useState('');

  const listUsers = userStore((state) => state.listUsers);
  const addUser = userStore((state) => state.addUser);
  const removeUser = userStore((state) => state.removeUser);

  const handleSubmitName = (event: any) => {
    event.preventDefault();
    addUser(nome);
    setNome('');
  };

  return (
    <>
      <h1>Zustand - Lista de Usuários</h1>

      <form onSubmit={handleSubmitName}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <label htmlFor="nome" style={{marginRight: '8px'}}>Digite seu nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Nome"
            style={{marginRight: '8px'}}
          />
          <button type="submit">
            <i className="fas fa-check"></i>
          </button>
        </div>

      </form>

      <div>
        {listUsers.length > 0 ? (
          <ul>
            {listUsers.map((user) => (
              <li key={user.id}>
                <span style={{marginRight: '8px'}}>{user.name}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeUser(user.id)}
                  style={{padding: '8px', marginBottom: '8px'}}
                >
                  <i className="fas fa-times" style={{fontSize: '1rem', padding: '0px '}}></i>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário cadastrado.</p>
        )}
      </div>
    </>
  );
}

export default App;
