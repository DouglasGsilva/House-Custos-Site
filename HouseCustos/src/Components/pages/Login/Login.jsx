import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signin } from "../../../services/userServices";
import signinSchema from "../../../Schemas/signinSchema";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Cookies from "js-cookie";
import {
  ButtonLogin,
  ContainerCenter,
  FormLogin,
  Input,
  LinkExit,
} from "./style";
import { ErrorMessage } from "../Cadastro/style";
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
    <ContainerCenter>
      <Link to={"/"}>
        <LinkExit>
          <IoMdArrowRoundBack />
        </LinkExit>
      </Link>{" "}
      <FormLogin onSubmit={handleSubmit(HandleSubmit)}>
        <p>Faça seu login</p>
        <Input
          type='text'
          placeholder='Digite seu e-mail'
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          type='password'
          placeholder='Digite sua senha'
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <ButtonLogin>Entrar</ButtonLogin>

        <h4>
          Não tem conta? <Link to={"/cadastro"}>Cadastre-se</Link>{" "}
        </h4>
      </FormLogin>
    </ContainerCenter>
  );
};

export default Login;
