import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  display: grid;
  grid-template-columns: 150px 150px;
  grid-auto-rows: 100px;
  align-items: center;
  justify-content: center;
  height: 265px;

  @media (min-width: 768px) {
    display: flex;
    margin-top: -80px;
  }
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid blue;
  border-radius: 5px;
  max-width: ${(props) => props.minwidth};

  @media (min-width: 768px) {
    font-size: 20px;
    height: 35px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid blue;
  border-radius: 5px;

  & option {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    height: 35px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: blue;
  color: black;
  margin: auto;
  cursor: pointer;
  transition: all 0.2s linear;
  margin-left: 70px;
  margin-bottom: 50px;
  &:hover {
    background-color: #3d3ddd;
    color: white;
    border: none;
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-bottom: auto;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #fff;
  color: #f00;
`;
