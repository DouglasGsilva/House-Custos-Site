import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const useApi = () => ({
  validarToken: async (token) => {
    return {
      user: { id: 3, name: "Douglas", email: "douglas@gmail.com" },
    };
    const response = await api.post("/signin", { token });
    return response.data;
  },
  signIn: async (email, password) => {
    return {
      user: { id: 3, name: "Douglas", email: "douglas@gmail.com" },
      token: "1231523",
    };
    const response = await api.post("/signin", { email, password });

    return response.data;
  },
  logOut: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
