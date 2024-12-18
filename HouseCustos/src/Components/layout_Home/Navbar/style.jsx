import styled from "styled-components";

export const NavbarBg = styled.div`
  width: 100%;
  height: 90px;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const NavLinks = styled.ul`
  height: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-left: -20px;
  background-color: #000000;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const NavLi = styled.li`
  margin-right: 20px;
  text-decoration: none;
  display: flex;

  @media (min-width: 768px) {
    margin-right: 60px;
  }
`;

export const LinkRouteCad = styled.p`
  color: #3d3ddd;
  background-color: #f2f2f2;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s linear;
  font-size: 16px;
  width: 97px;
  &:hover {
    color: #f2f2f2;
    background-color: #3d3ddd;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    width: 100%;
  }
`;

export const LinkRoutes = styled.p`
  color: #3d3ddd;
  margin-right: ${(props) => props.margin};
  font-size: 16px;
  transition: all 0.2s linear;
  justify-content: center;
  &:hover {
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LinkSignout = styled.div`
  margin: auto;
  cursor: pointer;
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  &:hover {
    background-color: #3d3ddd;
    color: #f2f2f2;
  }
`;

export const NavLogo = styled.img`
  padding: 20px;
  max-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: 0.9;

  @media (min-width: 768px) {
    max-width: 50px;
    height: 50px;
    margin-left: 30px;
  }
`;
