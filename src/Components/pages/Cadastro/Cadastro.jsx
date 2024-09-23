import "../Cadastro/Cadastro.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const Cadastro = () => {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({});

  function inHandleSubmit(data) {
    console.log(data);
  }

  return (
    <div className='container-main'>
      <h1 className='logo'>House Custos</h1>
      <form className='input-box' onSubmit={handleSubmitSignup(inHandleSubmit)}>
        <p className='placeholder'>Digite seu nome:</p>
        <input className='input-data' type='text' register={registerSignup} />
        <p className='placeholder'>Digite seu email:</p>
        <input className='input-data' type='email' register={registerSignup} />
        <p className='placeholder'>Digite sua senha:</p>
        <input
          type='password'
          className='input-data'
          register={registerSignup}
        />
        <button className='btn-cadastrar'>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
