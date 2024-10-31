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
  @media (min-width: 425px) {
    height: 1200px;
  }

  @media (min-width: 768px) {
    height: 1200px;
  }
`;

export const LinkExit = styled.a`
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
  }
`;

export const Logo = styled.h1`
  font-size: 50px;
  color: #f2f2f2;
  text-align: center;
  margin-top: 60px;
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
`;

export const FormCadTitle = styled.p`
  display: flex;
  margin-bottom: -1px;
  font-size: 15px;
  margin-right: ${(props) => props.margin};
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
