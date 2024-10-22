import styled from "styled-components";
import blueBg from "../../imgs/blue-bg.png";
export const AboutContainer = styled.div`
  background-image: url(${blueBg});
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.img`
  background-color: aliceblue;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  margin-right: 70px;
`;

export const Circle = styled.div`
  background-color: ${(props) => props.color};
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 40px;
  right: ${(props) => props.right};

  top: ${(props) => props.top};
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;
export const Text = styled.div`
  max-width: 700px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 90px;
  height: 40px;
  background-color: #3d3ddd;
  color: #f2f2f2;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    background-color: #2525df;
  }
`;

export const ContainerImage = styled.img`
  position: absolute;
`;
