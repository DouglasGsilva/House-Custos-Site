import "./Banner.css";
import { Link } from "react-router-dom";
import img from "../imgs/background-certo.jpg";
function Banner() {
  return (
    <>
      <img src={img} className="img-center" alt="" />
      <div className="banner">
        <h1>House Custos</h1>
        <p>
          Um site onde contará com o custo d casa, ultilizando uma api e podendo
          fazer o calculo das despesas, fazendo assim uma administração mais
          concisa.
        </p>
        <Link className="btn" to="/custos">
          Vamos Checar
        </Link>
      </div>
    </>
  );
}
export default Banner;
