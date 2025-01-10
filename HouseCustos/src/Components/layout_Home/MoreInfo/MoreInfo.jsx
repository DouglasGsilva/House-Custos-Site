// REACT HOOKS E REACT ROUTER DOM HOOKS
import { useLayoutEffect } from "react";
// ESTILOS
import "./MoreInfo.css";
import imgFile from "../../imgs/icone-pasta.png";
import imgEngine from "../../imgs/icone-engine.png";
import imgHouse from "../../imgs/icone-casinha.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as C from "./style";

// FUNÇÃO PRINCIPAL
const MoreInfo = () => {
  // ADIÇÃO DE ANIMAÇÃO DO GSAP(LIBRARY DE ANIMAÇÃO)
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
          end: "bottom 500px",
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
  // RETORNO DOS COMPONENTES DO MOREINFO
  return (
    <>
      <C.AreaContent>
        <section className='First-content'>
          <div className='content-first'>
            <C.ContentImg>
              <C.Img>
                <img src={imgFile} className='img' />
              </C.Img>
            </C.ContentImg>
            <p id='about'>
              Aqui você poderá armazenar todo o seu historico de compras feitas
              no mês e devolveremos o balanço pra você.
            </p>
          </div>
        </section>
        <section className='Second-content'>
          <div className='content-second'>
            <C.ContentImg>
              <C.Img>
                <img src={imgEngine} className='img' />
              </C.Img>
            </C.ContentImg>
            <p id='about'>
              você vai poder gerir com qualidade e ter total controle dos seus
              gastos além de todo o histórico do uso do seu dinheiro.
            </p>
          </div>
        </section>
        <section className='Third-content'>
          <div className='content-third'>
            <C.ContentImg>
              <C.Img>
                <img className='img' src={imgHouse} />
              </C.Img>
            </C.ContentImg>
            <p id='about'>
              isso tudo através de um sistema de armazenamento e de
              gerenciamento de capital tanto recebido quanto para que possa
              gerenciar a sua casa !!
            </p>
          </div>
        </section>
      </C.AreaContent>
    </>
  );
};

export default MoreInfo;
