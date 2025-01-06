import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signin } from "../../../services/userServices";
import signinSchema from "../../../Schemas/signinSchema";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Cookies from "js-cookie";
import * as C from "./style";
import { IoMdAlert } from "react-icons/io";
import { useContext, useState } from "react";
import loadingGif from "../../imgs/loading.gif";
import { UserContext } from "../../../context/UserContext";

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
  // ---------- --------- ---------- //

  // SUBMIT DO LOGIN PARA SER DIRECIONADO PARA A PAGINA CUSTOS
  async function HandleSubmit(data) {
    setDisable(true);
    try {
      const response = await signin(data);

      Cookies.set("token", response.data, { expires: 1 });

      const decodeToken = jwtDecode(response.data);
      console.log("token decodificado", decodeToken);

      console.log("Nome do usuário:", decodedToken.name);

      setUser({ name: decodedToken.name, id: decodedToken.id });

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

  // --------------- ------------- //

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
