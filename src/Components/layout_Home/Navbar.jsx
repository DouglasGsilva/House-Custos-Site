import { Link } from "react-router-dom";
import "../layout_Home/Navbar.css";
import logo from "../imgs/em_desenvolvimento.png";

function NavBar() {
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
