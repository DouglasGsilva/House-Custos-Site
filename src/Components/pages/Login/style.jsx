import styled from "styled-components";

export const LinkExit = styled.a`
  position: absolute;
  margin: auto;
  cursor: pointer;
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  top: 19px;
  left: 40px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  &:hover {
    color: #2525df;
  }
`;

export const ContainerCenter = styled.div`
  background-color: #3d3ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 617px;
`;

export const FormLogin = styled.form`
  background-color: #fff;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  width: 300px;
  height: 400px;

  & p {
    font-size: 30px;
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
  margin-bottom: 10px;
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
`;
