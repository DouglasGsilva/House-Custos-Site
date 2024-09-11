import "./MoreInfo.css";
import imgFile from "../imgs/icone-pasta.png";
import imgEngine from "../imgs/icone-engine.png";
import imgHouse from "../imgs/icone-casinha.png";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div className='area-content'>
        <section className='First-content'>
          <div className='content-first'>
            <div className='content-1'>
              <div className='img'>
                <img className='size-img' src={imgFile} alt='' />
              </div>
            </div>
            <p id='about'>
              Aqui você poderá armazenar todo o seu historico de compras feitas
              no mês e devolveremos o balanço pra você.
            </p>
          </div>
        </section>
        <div className='Second-content'>
          <div className='content-second'>
            <div className='content-2'>
              <div className='img'>
                <img className='size-img' src={imgEngine} alt='' />
              </div>
            </div>
            <p id='about'>
              você vai poder gerir com qualidade e ter total controle dos seus
              gastos além de todo o histórico do uso do seu dinheiro.
            </p>
          </div>
        </div>
        <div className='Third-content'>
          <div className='content-third'>
            <div className='content-3'>
              <div className='img'>
                <img className='size-img' src={imgHouse} alt='' />
              </div>
            </div>
            <p id='about'>
              isso tudo através de um sistema de armazenamento e de
              gerenciamento de capital tanto recebido quanto para que possa
              gerenciar a sua casa !!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
