import axios from "axios";
import Cookies from "js-cookie";

// URL PRINCIPAL DA API
const baseURL = "https://api-housecustos.onrender.com";
// ROTA LOCALHOST PARA TESTES  http://localhost:3001

// REQUISIÇÃO DE CADASTRO
export const signup = (data) => {
  const body = {
    ...data,
    avatar:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_9187604&psig=AOvVaw18ZT7eOfA6If17xRVG5zPx&ust=1727380956010000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICj49Px3ogDFQAAAAAdAAAAABAE",
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
};

// REQUISIÇÃO DE LOGIN
export const signin = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, data);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

// REQUISIÇÃO DE USUÁRIO LOGADO PARA ADIÇÃO DE TOKEN
export const userLogged = () => {
  const response = axios.get(`${baseURL}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

// REQUISIÇÃO DE RETORNO DE DADOS DO USUÁRIO
export const getUserDetails = async (token) => {
  try {
    const response = axios.get(`${baseURL}/user/findById`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao obter os dados do usuário", error);
    throw error;
  }
};
