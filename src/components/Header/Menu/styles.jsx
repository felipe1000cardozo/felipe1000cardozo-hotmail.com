import styled from "styled-components";

export const MainMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(250, 250, 250, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 3;
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
  li:hover {
    border-bottom: 3px solid var(--primary-color);
    padding-top: 10px;
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
`;
