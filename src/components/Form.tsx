import { useState } from 'react';
import { FormProps } from '../types';

function Form({ handleClick }: FormProps) {
  const [serviceNameInput, setServiceNameInput] = useState('');
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

  const passwordHaveLetterNumberSpecialChar = regex.test(passwordInput);
  console.log(passwordHaveLetterNumberSpecialChar);

  const validatingForm = serviceNameInput.length > 0
    && loginInput.length > 0
    && passwordInput.length >= 8
    && passwordInput.length <= 16
    && urlInput.length > 0
    && passwordHaveLetterNumberSpecialChar;

  return (
    <form>
      <div>
        <label htmlFor="service-name-input">Nome do Serviço</label>
        <input
          type="text"
          id="service-name-input"
          value={ serviceNameInput }
          onChange={ ({ target: { value } }) => setServiceNameInput(value) }
        />
      </div>
      <div>
        <label htmlFor="login-input">Login</label>
        <input
          type="text"
          id="login-input"
          value={ loginInput }
          onChange={ ({ target: { value } }) => setLoginInput(value) }
        />
      </div>
      <div>
        <label htmlFor="password-input">Senha</label>
        <input
          type="password"
          id="password-input"
          value={ passwordInput }
          onChange={ ({ target: { value } }) => setPasswordInput(value) }
        />
      </div>
      <div>
        <label htmlFor="url-input">URL</label>
        <input
          type="text"
          id="url-input"
          value={ urlInput }
          onChange={ ({ target: { value } }) => setUrlInput(value) }
        />
      </div>
      <div>
        <button
          disabled={ !validatingForm }
        >
          Cadastrar
        </button>
        <button onClick={ handleClick }>
          Cancelar
        </button>
      </div>

    </form>
  );
}

export default Form;
