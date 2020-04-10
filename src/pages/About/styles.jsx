import styled from "styled-components";

export const MainAbout = styled.div`
  max-width: 1114px;
  background-color: var(--four-color);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h1 {
    padding: 15px;
    text-align: center;
  }
  h3 {
    padding: 15px 15px 5px 15px;
  }
  p {
    padding: 5px 15px 15px 15px;
  }
  div {
    width: 100%;
    padding: 40px 15px 5px 15px;
  }
  img {
    width: 100%;
    border: 1px solid var(--primary-color);
  }
`;
