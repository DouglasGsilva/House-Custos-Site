import styled from "styled-components";

export const AreaContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flexbox;
  padding: 10px 10px 10px 10px;
`;

export const ContentImg = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  border-radius: 100px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
