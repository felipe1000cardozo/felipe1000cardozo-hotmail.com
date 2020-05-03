import styled from "styled-components";

const AboutComponentStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--four-color);
  padding: 60px;
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
  .container p {
    padding: 9px;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  .container p a {
    text-decoration: none;
    color: #222;
  }
  img {
    width: 100%;
    height: 344px;
  }
`;
export { AboutComponentStyled };
