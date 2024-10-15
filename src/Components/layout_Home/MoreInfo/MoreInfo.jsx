import { useLayoutEffect } from "react";

import "./MoreInfo.css";
import imgFile from "../../imgs/icone-pasta.png";
import imgEngine from "../../imgs/icone-engine.png";
import imgHouse from "../../imgs/icone-casinha.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AreaContent, ContentImg, Img } from "./style";

const MoreInfo = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(".content-first", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".First-content",
        start: "top 300px",
        end: "bottom 500px",
        scrub: true,
      },
    }),
      gsap.to(".content-second", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".Second-content",
          start: "top 300px",
          end: "bottom 400px",
          scrub: true,
        },
      }),
      gsap.to(".content-third", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".Third-content",
          start: "top 300px",
          end: "bottom 500px",
          scrub: true,
        },
      });
  });

  return (
    <>
      <AreaContent>
        <section className='First-content'>
          <div className='content-first'>
            <ContentImg>
              <Img>
                <img className='size-img' src={imgFile} alt='' />
              </Img>
            </ContentImg>
            <p id='about'>
              Aqui você poderá armazenar todo o seu historico de compras feitas
              no mês e devolveremos o balanço pra você.
            </p>
          </div>
        </section>
        <section className='Second-content'>
          <div className='content-second'>
            <ContentImg>
              <Img>
                <img className='size-img' src={imgEngine} alt='' />
              </Img>
            </ContentImg>
            <p id='about'>
              você vai poder gerir com qualidade e ter total controle dos seus
              gastos além de todo o histórico do uso do seu dinheiro.
            </p>
          </div>
        </section>
        <section className='Third-content'>
          <div className='content-third'>
            <ContentImg>
              <Img>
                <img className='size-img' src={imgHouse} alt='' />
              </Img>
            </ContentImg>
            <p id='about'>
              isso tudo através de um sistema de armazenamento e de
              gerenciamento de capital tanto recebido quanto para que possa
              gerenciar a sua casa !!
            </p>
          </div>
        </section>
      </AreaContent>
    </>
  );
};

export default MoreInfo;
