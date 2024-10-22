import * as C from "./style.jsx";
import imageWoman from "../../imgs/image-Woman2.jpg";
function About() {
  return (
    <>
      <C.AboutContainer>
        <C.TextContainer>
          <C.Text>
            Gerencie seus Custos diarios e mensais organizando tanto sua
            carteira quanto seus planegamentos futuros em relação a sua renda e
            com isso fazer investimentos e seu dinheiro gasto voltar para você
            que tal testar nossa ferramenta ?
          </C.Text>
          <C.Button>Testar</C.Button>
        </C.TextContainer>

        <C.ImageContainer src={imageWoman}></C.ImageContainer>
        <C.Circle
          width='80px'
          height='80px'
          right='50px'
          top='1600px'
          color='#2e2eb1'
        />
        <C.Circle
          width='60px'
          height='60px'
          right='100px'
          top='1670px'
          color='#2682ce'
        />
        <C.Circle
          width='40px'
          height='40px'
          right='160px'
          top='1710px'
          color='#adabab'
        />
      </C.AboutContainer>
    </>
  );
}

export default About;
