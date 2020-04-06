import styled from "styled-components";

const AboutComponentStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--four-color);
  h3 {
    padding: 40px 0;
    text-align: center;
  }
  .container {
    width: 412px;
  }
  .container > div {
    border: 2px solid #0375b4;
  }
  img {
    width: 100%;
  }
`;
export { AboutComponentStyled };
