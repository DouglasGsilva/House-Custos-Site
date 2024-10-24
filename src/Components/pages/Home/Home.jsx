import Banner from "../../layout_Home/Banner/Banner.jsx";

import MoreInfo from "../../layout_Home/MoreInfo/MoreInfo.jsx";
import About from "../../layout_Home/About/About.jsx";
import Footer from "../../layout_Home/Footer/Footer.jsx";
import NavBar from "../../layout_Home/Navbar/Navbar.jsx";

import { ContainerHome } from "./style.jsx";
import Cookies from "js-cookie";

function Home() {
  return (
    <ContainerHome>
      <NavBar />
      <Banner />
      <MoreInfo />
      <About />
      <Footer />
    </ContainerHome>
  );
}
export default Home;
