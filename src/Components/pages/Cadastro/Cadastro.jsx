import "../Cadastro/Cadastro.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../../../Schemas/signupSchema";
import { signup } from "../../../services/userServices";

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function HandleSubmit(data) {
    try {
      const response = await signup(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
        <p className='placeholder-CP'>Confirme sua senha:</p>
        <input
          type='password'
          className='input-data'
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className='error'>{errors.confirmPassword.message}</p>
        )}
        <button className='btn-cadastrar'>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
