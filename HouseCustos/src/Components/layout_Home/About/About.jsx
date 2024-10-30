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
      </C.AboutContainer>
    </>
  );
}

export default About;
