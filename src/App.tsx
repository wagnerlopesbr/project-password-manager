import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import NewButton from './components/NewButton';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  function handleFormRegister() {
    setShowForm(true);
    setShowRegister(false);
  }

  function handleDelete() {
    setShowForm(false);
    setShowRegister(true);
  }

  return (
    <>
      <Header />
      {/* {showRegister
        && <NewButton onClick={ handleFormRegister }>
          Cadastrar nova senha
        </NewButton>}
      {showForm && <Form onClick={ handleDelete } />} */}
      {showRegister
        ? <NewButton handleClick={ handleFormRegister }>Cadastrar nova senha</NewButton>
        : <Form handleClick={ handleDelete } />}
    </>
  );
}

export default App;
