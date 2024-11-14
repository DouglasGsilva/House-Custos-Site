import styled from "styled-components";

export const Table = styled.table`
  background-color: green;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
  height: 100%;
  padding: 0%;
  margin: auto;
  & thead {
  }

  & tbody {
  }
`;

export const TableHeadColumn = styled.th`
  padding: 0px 0px;

  text-align: ${(props) => props.textalign};
`;
