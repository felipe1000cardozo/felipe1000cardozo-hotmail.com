import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: var(--background-color);
  > div {
    margin: 16px;
  }
  .button-container {
    width: 100%;
    text-align: center;
  }
`;
