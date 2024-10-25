import { Link } from "react-router-dom";
import { signup, userLogged } from "../../../services/userServices";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

import Cookies from "js-cookie";

import logo from "../../imgs/em_desenvolvimento.png";
import {
  NavbarBg,
  NavLinks,
  NavLi,
  LinkRouteCad,
  LinkSignout,
  NavLogo,
  LinkRoutes,
} from "./style";
import { RxExit } from "react-icons/rx";

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

  function signOut() {
    Cookies.remove("token");
    Cookies.remove("userName");
    setUser(undefined);
  }

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

  return (
    <NavbarBg>
      <NavLogo src={logo}></NavLogo>
      <NavLinks>
        {!user ? (
          <NavLi>
            <Link to={"/cadastro"}>
              <LinkRouteCad>Cadastre-se</LinkRouteCad>
            </Link>{" "}
          </NavLi>
        ) : (
          ""
        )}
        {!user ? (
          <NavLi>
            <Link to={"/login"}>
              <LinkRoutes>Custos</LinkRoutes>
            </Link>
          </NavLi>
        ) : (
          <NavLi>
            <Link to={"/custos"}>
              <LinkRoutes>Custos</LinkRoutes>
            </Link>
          </NavLi>
        )}

        {user ? (
          <NavLi>
            <LinkRoutes margin='12px'>{user.name} </LinkRoutes>

            <LinkSignout>
              <RxExit onClick={signOut} />
            </LinkSignout>
          </NavLi>
        ) : (
          <NavLi>
            <Link to={"/login"}>
              <LinkRoutes>Entrar</LinkRoutes>
            </Link>
          </NavLi>
        )}
      </NavLinks>
    </NavbarBg>
  );
}
export default NavBar;
