import Banner from "../../layout_Home/Banner.jsx";
import "../Home/Home.css";
import MoreInfo from "../../layout_Home/MoreInfo.jsx";
import Integrantes from "../../layout_Home/Integrantes.jsx";
import Footer from "../../layout_Home/Footer.jsx";
import NavBar from "../../layout_Home/Navbar.jsx";
import Cookies from "js-cookie";

function Home() {
  console.log(Cookies.get("token"));
  return (
    <div className='home_main'>
      <NavBar />
      <Banner />
      <MoreInfo />
      <Integrantes />
      <Footer />
    </div>
  );
}
export default Home;
