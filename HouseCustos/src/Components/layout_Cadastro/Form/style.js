import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #5ea9e7;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (min-width: 360px) {
    height: 712px;
  }
  @media (min-width: 375px) {
    height: 756px;
  }
  @media (min-width: 412px) {
    height: 830px;
  }

  @media (min-width: 768px) {
    height: 935px;
  }
  @media (min-width: 1024px) {
    height: 620px;
    display: flex;
    flex-direction: row;
  }
`;

export const LinkExit = styled.div`
  position: absolute;
  margin: auto;
  cursor: pointer;
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  @media (min-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 50px;
    top: 20px;
    left: 20px;
  }

  @media (min-width: 1024px) {
    width: 40px;
    height: 40px;
    font-size: 40px;
  }
`;

export const Logo = styled.h1`
  font-size: 50px;
  color: #f2f2f2;
  text-align: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
    max-width: 200px;
    margin-right: 200px;
    font-size: 80px;
    text-align: center;
  }
`;

export const FormCad = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 400px;
  background-color: #f2f2f2;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    width: 400px;
    height: 500px;
  }

  @media (min-width: 1024px) {
    width: 290px;
    height: 100%;
  }
`;

export const FormCadTitle = styled.p`
  display: flex;
  margin-bottom: -1px;
  font-size: 15px;
  margin-right: ${(props) => props.margin};
  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    margin-right: ${(props) => props.marginlaptop};
  }
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 8px;
  background-color: #dbd8d8;
  border: 2px solid #3d3ddd;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;

  @media (min-width: 768px) {
    width: 300px;
    height: 40px;
  }

  @media (min-width: 1024px) {
    width: 200px;
    height: 25px;
  }
`;

export const ButtonCad = styled.button`
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

  &:hover {
    background-color: #2525df;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    width: 100px;
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    width: 80px;
    height: 30px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  width: 345px;
  height: 1px;
  bottom: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 11px;
`;

export const Loading = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 60px;
  height: 30px;
`;
