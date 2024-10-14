import { Link } from "react-router-dom";
import { signup, userLogged } from "../../../services/userServices";
import { useContext, useEffect } from "react";
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
} from "./Navbar.style";
import { RxExit } from "react-icons/rx";

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const findUserLogged = async () => {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  function signOut() {
    Cookies.remove("token");
    setUser(undefined);
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      findUserLogged();
    }
  }, []);

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

        <NavLi>
          <Link to={"/custos"}>
            <LinkRoutes>Custos</LinkRoutes>
          </Link>
        </NavLi>

        {user ? (
          <NavLi>
            <Link to={"/profile"}>
              <LinkRoutes>{user.name} </LinkRoutes>
            </Link>

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
