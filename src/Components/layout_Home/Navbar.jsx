import { Link, useNavigate } from "react-router-dom";
import "../layout_Home/Navbar.css";
import logo from "../imgs/em_desenvolvimento.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function NavBar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };
  return (
    <nav>
      <div className='navbar'>
        <img className='logo' src={logo} alt='Em Desenvolvimento'></img>

        <ul className='links'>
          <li>
            <Link className='cadastro' to={"/cadastro"}>
              Cadastre-se
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
            {auth.user && (
              <a className='btn-sair' href='/' onClick={handleLogout}>
                Sair
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
