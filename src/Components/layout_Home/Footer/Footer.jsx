import * as C from "./style.jsx";
import { FaArrowAltCircleUp } from "react-icons/fa";
import iconFacebook from "../../imgs/facebook.png";
import iconInstagram from "../../imgs/instagram.png";
import iconLinkedin from "../../imgs/linkedin.png";
function Footer() {
  return (
    <>
      <C.FooterMain>
        <C.Baseboard> 2024 DouglasDev® LTDA</C.Baseboard>
        <C.Social>
          <img src={iconFacebook} />
          <img src={iconInstagram} />
          <img src={iconLinkedin} />
        </C.Social>
        <C.ToTheTop>
          <p> Voltar ao topo</p>
          <FaArrowAltCircleUp
            style={{ marginLeft: "10px", fontSize: "40px" }}
          />
        </C.ToTheTop>
      </C.FooterMain>
    </>
  );
}
export default Footer;
