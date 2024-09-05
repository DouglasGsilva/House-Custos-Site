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
            <Link className='cadastro' to={"/login"}>
              Cadastre-se
            </Link>{" "}
          </li>
          <li>
            <Link className='home' to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className='custos' to={"/custos"}>
              Custos
            </Link>
          </li>
          <li>
            <Link className='sobre'>Sobre</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
