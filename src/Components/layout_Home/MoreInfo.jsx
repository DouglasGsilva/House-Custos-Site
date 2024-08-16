import "./MoreInfo.css";
import imgFile from "../imgs/icone-pasta.png";
import imgEngine from "../imgs/icone-engine.png";
import {useLayoutEffect} from "react"
import {gsap} from "gsap"
 import { ScrollTrigger } from "gsap/ScrollTrigger";

const MoreInfo = () => {

gsap.registerPlugin(ScrollTrigger)
useLayoutEffect(()=>{
  gsap.to(".content-first",{
x:0,
opacity:1,
scrollTrigger:{
  trigger: ".First-content",
  start:"top 300px",
  end:"bottom 500px",
  scrub:true
}}),
gsap.to(".content-second",{
  x:0,
  opacity:1,
  scrollTrigger:{
    trigger: ".Second-content",
    start:"top 300px",
    end:"bottom 500px",
    scrub:true
  }}),
  gsap.to(".content-third",{
    x:0,
    opacity:1,
    scrollTrigger:{
      trigger: ".Third-content",
      start:"top 300px",
      end:"bottom 500px",
      scrub:true
    }})
  
})


  return (
    <>
      <div className="area-content">
        <section className="First-content">
          <div className="content-first">
            <div className="content-1">
              <div className="img">
                <img className="size-img" src={imgFile} alt="" />
              </div>
            </div>
            <p id="about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi provident perspiciatis, dignissimos vel rem deserunt fugit
              totam maxime facilis cupiditate omnis sit non ut beatae similique
              ea laborum? Consectetur?
            </p>
          </div>
        </section>
        <div className="Second-content">
          <div className="content-second">
            <div className="content-2">
              <div className="img">
                <img className="size-img" src={imgEngine} alt="" />
              </div>
            </div>
            <p id="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eum deleniti illum similique. Eius, quae ab obcaecati saepe,
              assumenda exercitationem modi aliquid a ea molestiae dignissimos
              alias iusto corrupti inventore!
            </p>
          </div>
        </div>
        <div className="Third-content">
          <div className="content-third">
            <div className="content-3">
              <div className="img">
                <img className="size-img" src={imgEngine} alt="" />
              </div>
            </div>
            <p id="about">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              ipsam nulla inventore libero cumque mollitia est minus, dolores
              maxime, eligendi nobis, soluta sed magni placeat accusamus officia
              harum consequuntur dolore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
