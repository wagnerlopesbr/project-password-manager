import { useState } from 'react';
import { FormProps } from '../types';

function Form({ handleClick }: FormProps) {
  const [serviceNameInput, setServiceNameInput] = useState('');
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const letterRegex = /[A-Za-z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[@$!%*?&]/;

  const passwordHaveLetter = letterRegex.test(passwordInput);
  const passwordHaveNumber = numberRegex.test(passwordInput);
  const passwordHaveSpecialChar = specialCharRegex.test(passwordInput);
  const validPassword = 'valid-password-check';
  const invalidPassword = 'invalid-password-check';

  const validatingForm = serviceNameInput.length > 0
    && loginInput.length > 0
    && passwordInput.length >= 8
    && passwordInput.length <= 16
    && urlInput.length > 0
    && passwordHaveLetter
    && passwordHaveNumber
    && passwordHaveSpecialChar;

  return (
    <form>
      <div>
        <label htmlFor="service-name-input">Nome do Serviço</label>
        <input
          type="text"
          id="service-name-input"
          value={serviceNameInput}
          onChange={({ target: { value } }) => setServiceNameInput(value)}
        />
      </div>
      <div>
        <label htmlFor="login-input">Login</label>
        <input
          type="text"
          id="login-input"
          value={loginInput}
          onChange={({ target: { value } }) => setLoginInput(value)}
        />
      </div>
      <div>
        <label htmlFor="password-input">Senha</label>
        <input
          type="password"
          id="password-input"
          value={passwordInput}
          onChange={({ target: { value } }) => setPasswordInput(value)}
        />
      </div>
      <div>
        <label htmlFor="url-input">URL</label>
        <input
          type="text"
          id="url-input"
          value={urlInput}
          onChange={({ target: { value } }) => setUrlInput(value)}
        />
      </div>

      <section>
        <p>Sua senha deve:</p>
        <div>
          <p
            className={ passwordInput.length >= 8 ? validPassword : invalidPassword }
          >
            Possuir 8 ou mais caracteres
          </p>
        </div>
        <div>
          <p
            className={ passwordHaveNumber && passwordHaveLetter
              ? validPassword : invalidPassword }
          >
            Possuir letras e números
          </p>
        </div>
        <div>
          <p
            className={ passwordHaveSpecialChar ? validPassword : invalidPassword }
          >
            Possuir algum caractere especial
          </p>
        </div>
        <div>
          <p
            className={
              passwordInput.length >= 8 && passwordInput.length <= 16
                ? validPassword : invalidPassword
              }
          >
            Possuir até 16 caracteres
          </p>
        </div>
      </section>

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
