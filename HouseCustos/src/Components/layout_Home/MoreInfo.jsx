import "./MoreInfo.css";
import video from "../../assets/video.mp4";
const MoreInfo = () => {
  return (
    <>
      <video src={video} className="video" autoPlay loop muted></video>
      <div className="First-content">
        <div className="content-total">
          <div className="content-3">
            <div className="img"></div>
          </div>
          <p id="about">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi provident perspiciatis, dignissimos vel rem deserunt fugit
            totam maxime facilis cupiditate omnis sit non ut beatae similique ea
            laborum? Consectetur?
          </p>
        </div>
      </div>
      <div className="Second-content">
        <div className="content-total">
          <div className="content-3">
            <div className="img"></div>
          </div>
          <p id="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
            deleniti illum similique. Eius, quae ab obcaecati saepe, assumenda
            exercitationem modi aliquid a ea molestiae dignissimos alias iusto
            corrupti inventore!
          </p>
        </div>
      </div>
      <div className="Third-content">
        <div className="content-total">
          <div className="content-3">
            <div className="img"></div>
          </div>
          <p id="about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            ipsam nulla inventore libero cumque mollitia est minus, dolores
            maxime, eligendi nobis, soluta sed magni placeat accusamus officia
            harum consequuntur dolore.
          </p>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
