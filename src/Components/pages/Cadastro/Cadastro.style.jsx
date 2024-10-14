import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #5ea9e7;
  width: 100%;
  height: 617px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
`;

export const Logo = styled.h1`
  font-size: 100px;
  margin-left: 270px;
  color: #f2f2f2;
`;

export const FormCad = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background-color: #f2f2f2;
  margin-right: 270px;
  border-radius: 5px;
  padding-bottom: 10px;

  & p {
    display: flex;
    margin-bottom: -1px;
    margin-right: 140px;
  }
`;

export const Input = styled.input`
  width: 250px;
  height: 32px;
  border-radius: 12px;
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
  background-color: #f79999;
  color: red;
  padding: 0px 2px 0px 2px;
  border-radius: 5px;
`;
