import styled from "styled-components";

export const AboutComponentStyled = styled.section`
  max-width: 1114px;
  width: 100%;
  display: flex;
  background-color: var(--four-color);
  flex-wrap: wrap;
  h3{
  color: var(--secoundary-color);
  margin-bottom: 12px;
 }
 @media (max-width: 767px) {
    flex-direction: column;
  }
  .container {
    width: 50%;
    padding: 30px;
  div {
    display: flex;
    flex-direction: column;
    svg{
      padding-right: 5px;
    }
   p {
    padding: 12px 0;
    font-size: 14px;
    display: flex;
    color: var(--third-color);
  }
  .hour-container{
    margin-top: 12px;
  }
  }
  @media (max-width: 767px) {
    width:100%;
    padding:30px 10px;
h3{
  font-size:12px;
}
 
`;
