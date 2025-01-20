// REACT HOOKS/REACT ROUTER DOM HOOKS
import { Link } from "react-router-dom";
// ESTILOS
import img from "../../imgs/background-certo.jpg";
import { BannerContent, BannerButton, BannerImg } from "./style";

// FUNÇÃO PRINCIPAL
function Banner() {
  // RETORNO DOS COMPONENTES DO BANNER
  return (
    <>
      <BannerImg src={img} />
      <BannerContent>
        <h1>House Custos</h1>
        <p>
          Um site onde contará com o custo da casa, podendo fazer o cálculo das
          despesas e fazendo assim uma administração mais concisa.
        </p>
        <Link to='/cadastro'>
          <BannerButton>Vamos Checar</BannerButton>
        </Link>
      </BannerContent>
    </>
  );
}
export default Banner;
