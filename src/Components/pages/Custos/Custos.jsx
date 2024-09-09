import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
const Custos = () => {
  const auth = useContext(AuthContext);
  return (
    <div className='custos-container'>
      <h2>Pagina de custos</h2>
      <h3>Olá {auth.user.name}, tudo bem ?</h3>
    </div>
  );
};

export default Custos;
