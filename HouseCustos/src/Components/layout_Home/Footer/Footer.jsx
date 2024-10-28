import * as C from "./style";
import facebook from "../../imgs/facebook.png";
import instagram from "../../imgs/instagram.png";
import linkedin from "../../imgs/linkedin.png";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <C.FooterMain>
        <C.Container>
          <C.Text>Redes sociais</C.Text>
          <C.LiSocial>
            <C.RedeSocial src={facebook} />
            <C.RedeSocial src={instagram} />
            <C.RedeSocial src={linkedin} />
          </C.LiSocial>
          <C.Text>Voltar ao topo</C.Text>
          <FaArrowAltCircleUp
            style={{ width: "25px", height: "25px", marginTop: "-5px" }}
          />
          <C.Rodape>DouglasCorp LTDA</C.Rodape>
        </C.Container>
      </C.FooterMain>
    </>
  );
}
export default Footer;
