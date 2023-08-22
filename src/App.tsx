import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import NewButton from './components/NewButton';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  const handleFormRegister = () => {
    setShowForm(!showForm);
    setShowRegister(false);
  };

  const handleDelete = () => {
    setShowForm(false);
    setShowRegister(true);
  };

  return (
    <>
      <Header />
      {showRegister
        ? <NewButton handleClick={ handleFormRegister }>Cadastrar nova senha</NewButton>
        : <Form handleClick={ handleDelete } />}
    </>
  );
}

export default App;
