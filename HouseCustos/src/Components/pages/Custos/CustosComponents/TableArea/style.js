import styled from "styled-components";

export const Table = styled.table`
  box-shadow: 0px 0px 5px #ccc;
  margin-top: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TableHeadColumn = styled.th`
  width: 320px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;
