import styled from "styled-components";

export const NavbarBg = styled.div`
  width: 360px;
  height: 100px;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: 40px;
`;

export const NavLi = styled.li`
  margin-right: 20px;
  font-size: 20px;
  text-decoration: none;
  display: flex;
`;

export const LinkRouteCad = styled.p`
  width: 80px;
  color: #3d3ddd;
  background-color: #f2f2f2;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s linear;
  font-size: small;
  &:hover {
    color: #f2f2f2;
    background-color: #3d3ddd;
  }
`;

export const LinkRoutes = styled.p`
  color: #3d3ddd;
  margin-right: ${(props) => props.margin};
  font-size: small;
  &:hover {
    color: #2e2eb1;
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
  max-width: 40px;
  margin-left: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: 0.9;
`;
