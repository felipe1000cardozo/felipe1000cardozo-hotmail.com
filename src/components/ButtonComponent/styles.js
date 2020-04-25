import styled from "styled-components";

const Button = styled.button`
  margin: 13px 0;
  padding: 8px 26px;
  background-color: #fff;
  border: 2px solid var(--secoundary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Rubik;
  font-weight: 500;
  font-size: 14px;
  color: var(--secoundary-color);
  width: fit-content;
  height: fit-content;
  &:hover {
    background-color: var(--secoundary-color);
    color: #fff;
    transition: 0.5s;
  }
`;
export { Button };
