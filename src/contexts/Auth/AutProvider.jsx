import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useAPI";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validarToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, []);

  const signIn = async (email, password) => {
    const data = await api.signIn(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    await api.logOut();
    setUser(null);
    setToken("");
    window.location.href = window.location.href;
  };

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
