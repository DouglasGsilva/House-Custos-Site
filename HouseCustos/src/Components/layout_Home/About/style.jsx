import styled from "styled-components";
import blueBg from "../../imgs/blue-bg.png";

export const AboutContainer = styled.div`
  background-image: url(${blueBg});
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  height: 150px;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) {
    margin-top: 70px;
    height: 300px;
    width: 900px;
    margin-bottom: -100px;
    margin-left: 0px;
    margin-right: 0px;
  }
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
  margin-bottom: 20px;
  &:hover {
    background-color: #2525df;
  }

  @media (min-width: 768px) {
    width: 100px;
    font-size: 25px;
    height: 40px;
    margin-bottom: 30px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 100px;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: auto;
  margin-bottom: 20px;

  @media (min-width: 375px) {
    width: 200px;
    height: 200px;
    border-radius: 150px;
  }
  @media (min-width: 425px) {
    width: 250px;
    height: 250px;
    border-radius: 150px;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
    border-radius: 200px;
    margin-bottom: 30px;
  }
  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
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
  @media (min-width: 375px) {
    left: ${(props) => props.left375};
  }
  @media (min-width: 425px) {
    left: ${(props) => props.left425};
  }
  @media (min-width: 768px) {
    width: ${(props) => props.widthtablet};
    height: ${(props) => props.heighttablet};
    top: ${(props) => props.toptablet};
    left: ${(props) => props.lefttablet};
    border-radius: 100px;
  }
`;
