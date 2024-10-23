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
          width='70px'
          height='70px'
          right='10px'
          top='1460px'
          color='#2e2eb1'
        />
        <C.Circle
          width='50px'
          height='50px'
          right='45px'
          top='1530px'
          color='#2682ce'
        />
        <C.Circle
          width='30px'
          height='30px'
          right='100px'
          top='1570px'
          color='#adabab'
        />
      </C.AboutContainer>
    </>
  );
}

export default About;
