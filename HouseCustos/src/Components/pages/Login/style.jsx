import styled from "styled-components";

export const LinkExit = styled.a`
  position: absolute;
  margin: auto;
  cursor: pointer;
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  top: 19px;
  left: 20px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  &:hover {
    color: #2525df;
  }

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
    font-size: 40px;
  }
`;

export const TitleForm = styled.p`
  font-size: 30px;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 50px;
    margin-top: -50px;
  }
`;

export const TextDown = styled.p`
  font-size: 16px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const ContainerCenter = styled.div`
  background-color: #3d3ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 550px;

  @media (min-width: 360px) {
    height: 715px;
  }
  @media (min-width: 425px) {
    height: 750px;
  }
  @media (min-width: 768px) {
    height: 940px;
  }
`;

export const FormLogin = styled.form`
  background-color: #fff;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  width: 260px;
  height: 350px;

  @media (min-width: 360px) {
    width: 300px;
    height: 400px;
  }
  @media (min-width: 425px) {
    width: 350px;
    height: 450px;
  }

  @media (min-width: 768px) {
    height: 600px;
    width: 500px;
  }
  @media (min-width: 1024px) {
    height: 600px;
    width: 450px;
  }
`;

export const Input = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 12px;
  background-color: #dbd8d8;
  border: 2px solid #3d3ddd;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  margin-bottom: 20px;

  @media (min-width: 360px) {
    height: 40px;
    margin-top: 10px;
  }
  @media (min-width: 425px) {
    width: 300px;
    height: 45px;
    font-size: 17px;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 60px;
    font-size: 22px;
  }
  @media (min-width: 1024px) {
    height: 50px;
  }
`;

export const ButtonLogin = styled.button`
  width: 90px;
  height: 40px;
  background-color: #3d3ddd;
  color: #f2f2f2;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s linear;
  margin-top: 15px;

  @media (min-width: 768px) {
    font-size: 25px;
    width: 100px;
    height: 50px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  width: 400px;
  height: 1px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  margin-top: -20px;
  padding-top: 5px;
  padding-bottom: 5px;

  @media (min-width: 360px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
