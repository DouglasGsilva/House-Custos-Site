import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useAPI";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi;
  const signIn = async (email, password) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const signOut = async (email, password) => {
    await api.logOut;
    setUser(null);
  };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
