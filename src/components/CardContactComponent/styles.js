import styled from "styled-components";

export const MainCardContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
  margin-bottom: 50px;

  .card-infos {
    h4 {
      color: var(--secoundary-color);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
      color: var(--third-color);
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;
