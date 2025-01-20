// REACT HOOKS E REACT ROUTER DOM HOOKS
import { createContext, useState } from "react";

export const UserContext = createContext();

// FUNÇÃO PRINCIPAL COM UM PARAMETRO
export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  //RETORNO DA FUNÇÃO
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
