import styled from "styled-components";

const Button = styled.button`
  padding: 8px 26px;
  background-color: #fff;
  border: 2px solid var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Rubik;
  font-weight: 500;
  font-size: 14px;
  color: #0375b4;
  &:hover {
    background-color: var(--primary-color);
    color: #fff;
    transition: 0.5s;
  }
`;
export { Button };
