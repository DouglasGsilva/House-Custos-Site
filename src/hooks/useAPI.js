import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const useApi = () => ({
  validarToken: async (token) => {
    const response = await api.post("/signin", { token });
    return response.data;
  },
  signIn: async (email, password) => {
    const response = await api.post("/signin", { email, password });
    return response.data;
  },
  logOut: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
