import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid blue;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid blue;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: blue;
  color: black;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: #3d3ddd;
    color: white;
    border: none;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #fff;
  color: #f00;
`;
