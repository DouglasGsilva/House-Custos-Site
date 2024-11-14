import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signin } from "../../../services/userServices";
import signinSchema from "../../../Schemas/signinSchema";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Cookies from "js-cookie";
import * as C from "./style";
import { IoMdAlert } from "react-icons/io";
import { useState } from "react";
import loadingGif from "../../imgs/loading.gif";
const Login = () => {
  const [disable, setDisable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate();

  async function HandleSubmit(data) {
    setDisable(true);
    try {
      const response = await signin(data);
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setDisable(false);
    }
  }

  return (
    <C.ContainerCenter>
      <Link to={"/"}>
        <C.LinkExit>
          <IoMdArrowRoundBack />
        </C.LinkExit>
      </Link>{" "}
      {}
      <C.FormLogin onSubmit={handleSubmit(HandleSubmit)}>
        <C.TitleForm>Faça seu login</C.TitleForm>
        <C.Input
          type='text'
          placeholder='Digite seu e-mail'
          {...register("email")}
        />
        {errors.email && (
          <C.ErrorMessage>
            <IoMdAlert />
            {errors.email.message}
          </C.ErrorMessage>
        )}
        <C.Input
          type='password'
          placeholder='Digite sua senha'
          {...register("password")}
        />
        {errors.password && (
          <C.ErrorMessage>
            <IoMdAlert />
            {errors.password.message}
          </C.ErrorMessage>
        )}

        <C.ButtonLogin disabled={disable}>
          {disable ? <C.loading src={loadingGif} /> : "Entrar"}
        </C.ButtonLogin>

        <C.TextDown>
          Não tem conta? <Link to={"/cadastro"}>Cadastre-se</Link>{" "}
        </C.TextDown>
      </C.FormLogin>
    </C.ContainerCenter>
  );
};

export default Login;
