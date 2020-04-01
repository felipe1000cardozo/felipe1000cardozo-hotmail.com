import styled from "styled-components";

export const MainMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px var(--secoundary-color);
`;

export const Image = styled.div`
  display: flex;
  width: 50%;
  height: 85px;
  align-items: center;
  margin-left: 50px;

  img {
    width: 67px;
    height: 67px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 85px;

  li {
    list-style: none;
    padding: 8px 10px;
    margin-right: 40px;
    position: relative;
  }
  a {
    text-decoration: none;
    font-size: 20;
    font-weight: 500;
    color: #000;
    margin: 0 20px;
    padding: 0 4px;
  }
  a:hover {
    color: var(--primary-color);
  }
  span {
    display: none;
    width: 3px;
    background: var(--primary-color);
    position: absolute;
    top: 130%;
    width: 70px;
    height: 3px;
    left: 6%;
  }
  li:hover span {
    display: inline-block;
  }
`;
