import "../Cadastro/Cadastro.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../../../Schemas/signupSchema";
import { signup } from "../../../services/userServices";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

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
    <div className='container-main'>
      <Link to={"/"}>
        <IoMdArrowRoundBack className='voltar' />
      </Link>{" "}
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
