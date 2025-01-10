// REACT HOOKS E REACT ROUTER DOM HOOKS
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
// ESTILOS
import { IoMdAlert } from "react-icons/io";
import * as C from "./style";
import { IoMdArrowRoundBack } from "react-icons/io";
import loadingGif from "../../imgs/loading.gif";
// HOOK FORM
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// SCHEMAS,SERVICES,CONTEXTS,HELPERS E DATA
import { getUserDetails, signin } from "../../../services/userServices";
import signinSchema from "../../../Schemas/signinSchema";
import { UserContext } from "../../../context/UserContext";
// JS COOKIES
import Cookies from "js-cookie";

// FUNÇÃO PRINCIPAL
const Login = () => {
  const [disable, setDisable] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  // FUNÇÃO DE LOGIN PARA SER DIRECIONADO PARA A PAGINA CUSTOS
  async function HandleSubmit(data) {
    setDisable(true);
    try {
      const response = await signin(data);

      Cookies.set("token", response.data, { expires: 1 });

      const userResponse = await getUserDetails(response.data);

      setUser({ name: userResponse.data.name });

      navigate("/custos");
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setDisable(false);
    }
  }

  // RETORNO DA FUNÇÃO COM OPERADORES TERNARIOS PARA ERRO DE DIGITAÇÃO E DESATIVAÇÃO DE LOADING
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
