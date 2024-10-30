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

  @media (min-width: 375px) {
    margin-top: -25px;
  }

  @media (min-width: 425px) {
    margin-top: -40px;
  }
  @media (min-width: 768px) {
    width: 100px;
    font-size: 25px;
    height: 40px;
    margin-bottom: 50px;
    margin-top: 10px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 100px;
    margin-top: -40px;
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
    width: 400px;
    height: 400px;
    border-radius: 200px;
    margin-bottom: 30px;
  }
  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`;

export const ContentCircle = styled.div`
  width: 100px;
  height: 100px;
  background-color: none;
  position: absolute;
  left: 171px;
  bottom: -745px;

  @media (min-width: 360px) {
    left: 190px;
  }
  @media (min-width: 375px) {
    left: 200px;
    bottom: -735px;
  }
  @media (min-width: 425px) {
    height: 105px;
    left: 245px;
    bottom: -760px;
  }
  @media (min-width: 768px) {
    scale: 2;
    left: 460px;
  }
  @media (min-width: 1024px) {
    bottom: -1450px;
    left: 745px;
  }
`;
export const Circle = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 100px;
  position: absolute;
  left: ${(props) => props.left};
  bottom: ${(props) => props.bot};

  @media (min-width: 425px) {
    width: ${(props) => props.widthL};
    height: ${(props) => props.heightL};
  }
`;
