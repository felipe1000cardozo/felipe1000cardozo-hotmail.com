import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  max-width: 1114px;
  height: 40px;

  p,
  a {
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    padding: 7px;
  }
  p {
    display: flex;
    align-items: center;
  }
`;

export const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding-left: 70px;
  background-color: var(--primary-color);
  position: relative;
  svg {
    padding-right: 7px;
  }
  ::after {
    content: "";
    height: 0;
    width: 0;
    border: 20px solid;
    border-color: var(--secoundary-color) var(--secoundary-color)
      var(--primary-color) var(--primary-color);
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 115px;
  width: 50%;
  background-color: var(--secoundary-color);
  /* box-shadow: inset 0px 4px 4px var(--primary-color); */
  a {
    display: block;
  }
`;
