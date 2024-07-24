import "./Banner.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <header>
      <div className="img">
        <div className="banner">
          <h1>House Custos</h1>
          <p>
            Um site onde contará com o custo da minha casa, ultilizando uma api
            e podendo fazer o calculo das despesas, fazendo assim uma
            administração mais concisa.
          </p>
          <Link className="btn" to="/custos">
            Vamos Checar
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Banner;
