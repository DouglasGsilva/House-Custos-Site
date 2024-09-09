import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../../Components/pages/Login/Login";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }
  return children;
};
