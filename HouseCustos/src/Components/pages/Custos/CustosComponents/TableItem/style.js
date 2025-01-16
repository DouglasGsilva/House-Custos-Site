import styled from "styled-components";

export const ContainerColumn = styled.div`
  display: flex;
  justify-content: end;
`;

export const TableColumn = styled.td`
  margin: auto;
  text-align: start;
`;

export const Category = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div`
  color: ${(props) => props.color};
`;
