import Banner from "../layout_Home/Banner";
import "./Home.css";
import MoreInfo from "../layout_Home/MoreInfo.jsx";
import Integrantes from "../layout_Home/Integrantes";
function Home() {
  return (
    <div className="home_main">
      <Banner />
      <MoreInfo />
      <Integrantes />
    </div>
  );
}
export default Home;
