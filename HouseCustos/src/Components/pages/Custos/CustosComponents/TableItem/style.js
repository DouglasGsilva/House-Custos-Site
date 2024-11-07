import styled from "styled-components";

export const TableColumn = styled.td``;

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
