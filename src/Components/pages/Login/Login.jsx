import "./Login.css";
const Login = () => {
  async function HandleSubmit(data) {
    try {
      const response = await signup(data);
      console.log(response);
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container-center'>
      <form onClick={HandleSubmit} className='pape-login'>
        <p className='title'>Faça seu login</p>
        <input
          className='input'
          type='text'
          placeholder='Digite seu e-mail'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='input'
          type='password'
          placeholder='Digite sua senha'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn-login'>Entrar</button>

        <p>
          {" "}
          Não tem conta? <a href=''>Cadastre-se</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
