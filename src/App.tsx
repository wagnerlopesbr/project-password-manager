import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import NewButton from './components/NewButton';
import { FormInputType } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [showPassword, setShowPassword] = useState<FormInputType[]>([]);
  const [hidePasswords, SetHidePasswords] = useState(false);

  const handleFormRegister = () => {
    setShowForm(!showForm);
    setShowRegister(false);
  };

  const handleDelete = () => {
    setShowForm(false);
    setShowRegister(true);
  };

  const handlePasswordNewAdd = (newPassword: FormInputType) => {
    setShowPassword([...showPassword, newPassword]);
    console.log(newPassword.password);
  };

  const handlePasswordDelete = (
    serviceNameToDelete: string,
    loginToDelete: string,
    passwordToDelete: string,
    urlToDelete: string,
  ) => {
    const updatePasswords = showPassword.filter((password) => !(
      password.service === serviceNameToDelete
      && password.login === loginToDelete
      && password.password === passwordToDelete
      && password.url === urlToDelete
    ));
    setShowPassword(updatePasswords);
  };

  return (
    <>
      <Header />
      {showRegister
        && <NewButton handleClick={ handleFormRegister }>Cadastrar nova senha</NewButton>}
      {showForm
        && <Form handleClick={ handleDelete } passwordAdd={ handlePasswordNewAdd } />}
      <label htmlFor="hidePassword">Esconder senhas</label>
      <input
        type="checkbox"
        id="hidePassword"
        onChange={ () => SetHidePasswords(!hidePasswords) }
      />
      <fieldset>
        {showPassword.length > 0 ? (
          showPassword.map((password) => (
            <div key={ password.password }>
              <a href={ password.url } target="_blank" rel="noopener noreferrer">
                {password.service}
              </a>
              <p>{password.login}</p>
              <p>{hidePasswords ? '******' : password.password}</p>
              <button
                data-testid="remove-btn"
                onClick={ () => handlePasswordDelete(
                  password.service,
                  password.login,
                  password.password,
                  password.url,
                ) }
              >
                Remover
              </button>
            </div>
          ))
        ) : (
          <p>Nenhuma senha cadastrada</p>
        )}
      </fieldset>
    </>
  );
}

export default App;
