import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../../../Schemas/signupSchema";
import { signup } from "../../../services/userServices";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import {
  LinkExit,
  MainContainer,
  Logo,
  FormCad,
  Input,
  ButtonCad,
  ErrorMessage,
} from "./Cadastro.style";

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
    <MainContainer>
      <Link to={"/"}>
        <LinkExit>
          <IoMdArrowRoundBack />
        </LinkExit>
      </Link>{" "}
      <Logo>House Custos</Logo>
      <FormCad onSubmit={handleSubmit(HandleSubmit)}>
        <p>Digite seu nome:</p>
        <Input type='text' {...register("name")} />

        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        <p>Digite seu email:</p>
        <Input type='email' {...register("email")} />

        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <p>Digite sua senha:</p>
        <Input type='password' {...register("password")} />

        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <p>Confirme sua senha:</p>
        <Input type='password' {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}
        <ButtonCad>Cadastrar</ButtonCad>
      </FormCad>
    </MainContainer>
  );
};

export default Cadastro;
