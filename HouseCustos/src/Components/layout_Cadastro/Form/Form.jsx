import React, { useState } from "react";
import * as C from "./style";
import { IoMdAlert } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../../../Schemas/signupSchema";
import { signup } from "../../../services/userServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../imgs/loading.gif";
const FormContainer = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  async function HandleSubmit(data) {
    setLoading(true);
    try {
      const response = await signup(data);
      console.log(response);
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <C.MainContainer>
      <Link to={"/"}>
        <C.LinkExit>
          <IoMdArrowRoundBack />
        </C.LinkExit>
      </Link>{" "}
      <C.Logo>House Custos</C.Logo>
      <C.FormCad onSubmit={handleSubmit(HandleSubmit)}>
        <C.FormCadTitle margin='140px' marginlaptop='100px'>
          Digite seu nome:
        </C.FormCadTitle>
        <C.Input type='text' {...register("name")} />

        {errors.name && (
          <C.ErrorMessage>
            <IoMdAlert />
            {errors.name.message}
          </C.ErrorMessage>
        )}

        <C.FormCadTitle margin='140px' marginlaptop='100px'>
          Digite seu email:
        </C.FormCadTitle>
        <C.Input type='email' {...register("email")} />

        {errors.email && (
          <C.ErrorMessage>
            <IoMdAlert />
            {errors.email.message}
          </C.ErrorMessage>
        )}

        <C.FormCadTitle margin='140px' marginlaptop='100px'>
          Digite sua senha:
        </C.FormCadTitle>
        <C.Input type='password' {...register("password")} />

        {errors.password && (
          <C.ErrorMessage>
            <IoMdAlert />
            {errors.password.message}
          </C.ErrorMessage>
        )}
        <C.FormCadTitle margin='120px' marginlaptop='70px'>
          Confirme sua senha:
        </C.FormCadTitle>
        <C.Input type='password' {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <C.ErrorMessage>
            <IoMdAlert />
            {errors.confirmPassword.message}
          </C.ErrorMessage>
        )}

        <C.ButtonCad disabled={loading}>
          {loading ? <C.Loading src={loadingGif} /> : "Cadastrar"}
        </C.ButtonCad>
      </C.FormCad>
    </C.MainContainer>
  );
};

export default FormContainer;
