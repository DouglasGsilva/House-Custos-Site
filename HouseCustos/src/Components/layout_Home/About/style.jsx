import styled from "styled-components";
import blueBg from "../../imgs/blue-bg.png";

export const AboutContainer = styled.div`
  background-image: url(${blueBg});
  width: 100%;
  height: 500px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 11px;
  text-align: center;
`;

export const Button = styled.button`
  margin: auto;
  margin-top: -15px;
  width: 60px;
  height: 25px;
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

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: auto;
`;
export const Circle = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50px;
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};

  @media (min-width: 360px) {
    left: ${(props) => props.left360};
  }
`;
