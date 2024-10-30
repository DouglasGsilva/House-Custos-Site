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
        <C.ContentCircle>
          <C.Circle
            color='#3d3ddd'
            width='35px'
            widthL='40px'
            height='35px'
            heightL='40px'
            left='65px'
          />
          <C.Circle
            color='#2881ca'
            width='25px'
            widthL='30px'
            height='25px'
            heightL='30px'
            left='55px'
            bot='35px'
          />
          <C.Circle
            color='#888686'
            width='20px'
            widthL='25px'
            height='20px'
            heightL='25px'
            left='35px'
            bot='15px'
          />
        </C.ContentCircle>
      </C.AboutContainer>
    </>
  );
}

export default About;
