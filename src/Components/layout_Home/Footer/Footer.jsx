import * as C from "./style.jsx";
import { FaArrowAltCircleUp } from "react-icons/fa";
function Footer() {
  return (
    <>
      <C.FooterMain>
        <C.Baseboard>C 2024 DouglasDev LTDA</C.Baseboard>
        <C.Social>redes socias</C.Social>
        <C.ToTheTop>
          Voltar ao topo
          <FaArrowAltCircleUp />
        </C.ToTheTop>
      </C.FooterMain>
    </>
  );
}
export default Footer;
