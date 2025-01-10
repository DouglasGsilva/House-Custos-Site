// REACT HOOKS E REACT ROUTER DOM HOOKS
import { useContext, useEffect, useState } from "react";
C;
import { Link } from "react-router-dom";
// ESTILOS
import logo from "../../imgs/em_desenvolvimento.png";
import * as C from "./style";
import { RxExit } from "react-icons/rx";
// SCHEMAS,SERVICES E CONTEXTS
import { signup, userLogged } from "../../../services/userServices";
import { UserContext } from "../../../context/UserContext";
// JS COOKIES
import Cookies from "js-cookie";

// FUNÇÃO PRINCIPAL
function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const findUserLogged = async () => {
    try {
      const response = await userLogged();
      setUser(response.data);
      Cookies.set("userName", response.data.name, { expires: 7 });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // FUNÇÃO DE DESLOGAR
  function signOut() {
    Cookies.remove("token");
    Cookies.remove("userName");
    setUser({});
  }

  // USEEFFECT PARA RESOLVER O PROBLEMA DE REFRESH ESTÁTICO DA PÁGINA HOME
  useEffect(() => {
    if (Cookies.get("token")) {
      findUserLogged();
    } else {
      setUser(undefined);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return null;
  }

  // RETORNO DOS COMPONENTES DA BARRA DE NAVEGAÇÃO E OPERADOR TERNÁRIO PARA O USUÁRIO
  return (
    <C.NavbarBg>
      <C.NavLogo src={logo}></C.NavLogo>
      <C.NavLinks>
        {!user ? (
          <C.NavLi>
            <Link to={"/cadastro"}>
              <C.LinkRouteCad>Cadastre-se</C.LinkRouteCad>
            </Link>{" "}
          </C.NavLi>
        ) : (
          ""
        )}

        {user ? (
          <C.NavLi>
            <C.LinkRoutes margin='12px'>{user.name} </C.LinkRoutes>

            <Link to={"/custos"}>
              <C.LinkRoutes margin='30px'>Custos</C.LinkRoutes>
            </Link>

            <C.LinkSignout>
              <RxExit onClick={signOut} />
            </C.LinkSignout>
          </C.NavLi>
        ) : (
          <C.NavLi>
            <Link to={"/login"}>
              <C.LinkRoutes>Entrar</C.LinkRoutes>
            </Link>
          </C.NavLi>
        )}
      </C.NavLinks>
    </C.NavbarBg>
  );
}
export default NavBar;
