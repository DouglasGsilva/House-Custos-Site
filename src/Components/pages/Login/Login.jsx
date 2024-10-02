import "./Login.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signin } from "../../../services/userServices";
import signinSchema from "../../../Schemas/signinSchema";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate();

  async function HandleSubmit(data) {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  }

  return (
    <div className='container-center'>
      <form onSubmit={handleSubmit(HandleSubmit)} className='pape-login'>
        <p className='title'>Faça seu login</p>
        <input
          className='input'
          type='text'
          placeholder='Digite seu e-mail'
          {...register("email")}
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}
        <input
          className='input'
          type='password'
          placeholder='Digite sua senha'
          {...register("password")}
        />
        {errors.password && <p className='error'>{errors.password.message}</p>}
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
