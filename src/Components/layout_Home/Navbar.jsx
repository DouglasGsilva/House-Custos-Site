import { Link } from "react-router-dom";
import "../layout_Home/Navbar.css";
import logo from "../imgs/em_desenvolvimento.png";


function NavBar( {action}) {


  return (
    <nav >
      <div className={`navbar ${action ? "activeColor":""}` } >
        
      <Link to={"/"}><img className="logo" src={logo} alt="Em Desenvolvimento"></img></Link>{" "}
        <ul className="links">
          <li className="li">
           <button className="btn-Login">Criar Conta</button>
          </li>
          {/* <li className="li">
            <Link to={"/custos"}>Custos</Link>{" "}
          </li> */}
          <li className="li">
            <button className="btn-Entrar">Entrar</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
