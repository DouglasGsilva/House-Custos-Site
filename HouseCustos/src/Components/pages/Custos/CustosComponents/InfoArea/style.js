import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const ResumeArea = styled.div`
  display: flex;
  flex: 2;

  @media (min-width: 768px) {
    flex: 1;
  }
`;
export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 35px;
  }
`;
export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
