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
`;

export const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding-left: 50px;
  background-color: var(--primary-color);
  position: relative;
  &:after {
    content: "";
    height: 100%;
    width: 50px;
    background-color: inherit;
    right: -21px;
    position: absolute;
    z-index: 1;
    transform: skewX(230deg);
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: var(--third-color);
  box-shadow: inset 0px 4px 4px var(--primary-color);
  a {
    display: block;
  }
`;
