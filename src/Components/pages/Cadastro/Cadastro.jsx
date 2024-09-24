import "../Cadastro/Cadastro.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../../../Schemas/signupSchema";

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  function HandleSubmit(data) {
    console.log(data);
  }

  return (
    <div className='container-main'>
      <h1 className='logo'>House Custos</h1>
      <form className='input-box' onSubmit={handleSubmit(HandleSubmit)}>
        <p className='placeholder'>Digite seu nome:</p>
        <input className='input-data' type='text' {...register("name")} />

        {errors.name && <p className='error'>{errors.name.message}</p>}

        <p className='placeholder'>Digite seu email:</p>
        <input className='input-data' type='email' {...register("email")} />

        {errors.email && <p className='error'>{errors.email.message}</p>}

        <p className='placeholder'>Digite sua senha:</p>
        <input
          type='password'
          className='input-data'
          {...register("password")}
        />

        {errors.password && <p className='error'>{errors.password.message}</p>}

        <button className='btn-cadastrar'>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
