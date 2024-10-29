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
          left='235px'
          left360='250px'
          left375='280px'
          left425='300px'
          lefttablet='515px'
          top='1275px'
          toptablet='1620px'
          color='#3d3ddd'
          width='35px'
          height='35px'
          widthtablet='70px'
          heighttablet='70px'
        />
        <C.Circle
          left='220px'
          left360='235px'
          left375='265px'
          left425='285px'
          lefttablet='485px'
          top='1311px'
          toptablet='1695px'
          color='#2881ca'
          width='25px'
          height='25px'
          widthtablet='50px'
          heighttablet='50px'
        />
        <C.Circle
          left='195px'
          left360='215px'
          left425='265px'
          left375='245px'
          lefttablet='440px'
          top='1332px'
          toptablet='1745px'
          color='#888686'
          width='20px'
          height='20px'
          widthtablet='35px'
          heighttablet='35px'
        />
      </C.AboutContainer>
    </>
  );
}

export default About;
