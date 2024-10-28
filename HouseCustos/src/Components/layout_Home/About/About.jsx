import * as C from "./style";
import ImageWoman from "../../imgs/image-Woman2.jpg";
function About() {
  return (
    <>
      <C.AboutContainer>
        <C.Text>
          Priorizando a sua estabilidade financeira nosso sistema faz um balanço
          do quanto foi gasto ou acrescentado para uma melhor visualização do
          seu capital, fazendo assim com que você possa identificar o uso
          "errado" do seu dinheiro.
        </C.Text>
        <C.Button>Testar</C.Button>
        <C.Img src={ImageWoman} />
        <C.Circle
          left='230px'
          left360='250px'
          left375='260px'
          left425='280px'
          top='1275px'
          color='#3d3ddd'
          width='35px'
          height='35px'
        />
        <C.Circle
          left='215px'
          left360='235px'
          left375='245px'
          left425='265px'
          top='1311px'
          color='#2881ca'
          width='25px'
          height='25px'
        />
        <C.Circle
          left='195px'
          left360='215px'
          left375='220px'
          left425='245px'
          top='1332px'
          color='#888686'
          width='20px'
          height='20px'
        />
      </C.AboutContainer>
    </>
  );
}

export default About;
