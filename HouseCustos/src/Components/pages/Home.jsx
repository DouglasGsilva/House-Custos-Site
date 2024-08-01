import Banner from "../layout_Home/Banner";
import "./Home.css";
import MoreInfo from "../layout_Home/MoreInfo.jsx";
import Integrantes from "../layout_Home/Integrantes";
import Footer from "../layout_Home/Footer.jsx";
function Home() {
  return (
    <div className="home_main">
      <Banner />
      <MoreInfo />
      <Integrantes />
      <Footer />
    </div>
  );
}
export default Home;
