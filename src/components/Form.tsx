function Form() {
  return (
    <form>
      <div>
        <label htmlFor="service-name-input">Nome do Serviço</label>
        <input
          type="text"
          id="service-name-input"
        />
      </div>
      <div>
        <label htmlFor="login-input">Login</label>
        <input
          type="text"
          id="login-input"
        />
      </div>
      <div>
        <label htmlFor="password-input">Senha</label>
        <input
          type="password"
          id="password-input"
        />
      </div>
      <div>
        <label htmlFor="url-input">URL</label>
        <input
          type="text"
          id="url-input"
        />
      </div>
      <div>
        <button>
          Cadastrar
        </button>
        <button>
          Cancelar
        </button>
      </div>

    </form>
  );
}

export default Form;
