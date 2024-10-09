import { Link } from "react-router-dom";
import "../layout_Home/Navbar.css";
import logo from "../imgs/em_desenvolvimento.png";
import { signup, userLogged } from "../../services/userServices";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { RxExit } from "react-icons/rx";
import { UserContext } from "../../context/userContext";

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
    <nav>
      <div className='navbar'>
        <img className='logo' src={logo} alt='Em Desenvolvimento'></img>

        <ul className='links'>
          {!user ? (
            <li>
              <Link className='cadastro' to={"/cadastro"}>
                Cadastre-se
              </Link>{" "}
            </li>
          ) : (
            ""
          )}

          <li>
            <Link className='custos' to={"/custos"}>
              Custos
            </Link>
          </li>
          <li>
            <Link className='sobre'>Sobre</Link>{" "}
          </li>

          {user ? (
            <li>
              <Link className='name' to={"/profile"}>
                {user.name}{" "}
              </Link>
              <RxExit className='signout' onClick={signOut} />
            </li>
          ) : (
            <li>
              <Link className='login' to={"/login"}>
                Entrar
              </Link>{" "}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
