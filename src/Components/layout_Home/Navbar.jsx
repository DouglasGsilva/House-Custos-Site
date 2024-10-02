import { Link } from "react-router-dom";
import "../layout_Home/Navbar.css";
import logo from "../imgs/em_desenvolvimento.png";
import { userLogged } from "../../services/userServices";
import { useEffect } from "react";
import Cookies from "js-cookie";
function NavBar() {
  const findUserLogged = async () => {
    try {
      const response = await userLogged();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

  return (
    <nav>
      <div className='navbar'>
        <img className='logo' src={logo} alt='Em Desenvolvimento'></img>

        <ul className='links'>
          <li>
            <Link className='login' to={"/login"}>
              Login
            </Link>{" "}
          </li>

          <li>
            <Link className='custos' to={"/custos"}>
              Custos
            </Link>
          </li>
          <li>
            <Link className='sobre'>Sobre</Link>{" "}
          </li>
          <li>
            <Link className='cadastro' to={"/cadastro"}>
              Cadastre-se
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
