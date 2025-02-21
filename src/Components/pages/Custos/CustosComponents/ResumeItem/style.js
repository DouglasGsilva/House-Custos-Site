import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin-right: 10px;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Info = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color ?? "#000"};
  width: 100px;

  @media (min-width: 768px) {
    width: 135px;
  }
`;
