import styled from "styled-components";

export const BannerContent = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 110px;
  left: 0;

  & h1 {
    color: #000000;
    text-transform: uppercase;
    margin-top: 100px;
  }
  & p {
    color: #000000;
    max-width: 40rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 30px;
    -webkit-text-stroke: #f2f2f2 0.05px;
  }
`;

export const BannerButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 3px 20px 3px;
  color: #2d2d2d;
  border: 2px solid #2d2d2d;
  border-radius: 3px;
  background: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #3d3ddd;
    color: #f2f2f2;
    border-radius: 6px;
  }
`;

export const BannerImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 620px;
  object-fit: cover;
`;
