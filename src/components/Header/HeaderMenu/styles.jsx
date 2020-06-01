import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  max-width: 1114px;
  height: 40px;
  background-color: var(--secoundary-color);
  .adress {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: var(--primary-color);
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 1;
    svg {
      padding-right: 7px;
    }
  }
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    z-index: 1;
    /* box-shadow: inset 0px 4px 4px var(--primary-color); */
    a {
      display: block;
    }
  }
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
  @media screen and (max-width: 767px) {
    display: none;
  }
  ::before {
    content: "";
    width: 40vw;
    background-color: var(--primary-color);
    height: 40px;
    position: absolute;
    z-index: 0;
    left: 0;
  }
  ::after {
    content: "";
    width: 40vw;
    background-color: var(--secoundary-color);
    height: 40px;
    position: absolute;
    z-index: 0;
    right: 0;
  }
`;
