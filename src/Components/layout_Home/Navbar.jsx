import { Link } from "react-router-dom";
import "../layout_Home/Navbar.css";
import logo from "../imgs/em_desenvolvimento.png";
import { userLogged } from "../../services/userServices";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { RxExit } from "react-icons/rx";

function NavBar() {
  const [user, setUser] = useState();
  const findUserLogged = async () => {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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
              <p className='name'>{user.name}</p> <RxExit className='signout' />
            </li>
          ) : (
            ((
              <li>
                <Link className='cadastro' to={"/cadastro"}>
                  Cadastre-se
                </Link>{" "}
              </li>
            ),
            (
              <li>
                <Link className='login' to={"/login"}>
                  Entrar
                </Link>{" "}
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
