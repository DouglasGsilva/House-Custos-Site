import styled from "styled-components";

export const FooterMain = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
`;

export const ContentNetwork = styled.div`
  text-align: center;
  @media (min-width: 375px) {
    margin-left: 30px;
  }
`;

export const ContentToTop = styled.div`
  text-align: center;

  @media (min-width: 375px) {
    margin-right: 30px;
  }
  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const Rodape = styled.p`
  font-size: 13px;
  text-align: center;
  margin: auto;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LiSocial = styled.li`
  display: flex;
  align-items: center;
`;
export const RedeSocial = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
