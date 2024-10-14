import { Link } from "react-router-dom";
import img from "../../imgs/background-certo.jpg";
import { BannerContent, BannerButton, BannerImg } from "./Banner.style";
function Banner() {
  return (
    <>
      <BannerImg src={img} />
      <BannerContent>
        <h1>House Custos</h1>
        <p>
          Um site onde contará com o custo da casa, podendo fazer o calculo das
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
