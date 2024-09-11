import "./Login.css";
export const Login = () => {
  return (
    <div className='container-center'>
      <div className='pape-login'>
        <p className='title'>Faça seu login</p>
        <input
          className='input'
          type='text'
          value={email}
          placeholder='Digite seu e-mail'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='input'
          type='password'
          value={password}
          placeholder='Digite sua senha'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn-login' onClick={handleLogin}>
          Entrar
        </button>

        <p>
          {" "}
          Não tem conta? <a href=''>Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};
