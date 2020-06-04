import styled from "styled-components";

export const Foot = styled.div`
  display: flex;
  max-width: 1114px;
  height: 110px;
  background-color: var(--secoundary-color);
  color: var(--four-color);
  .adress {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    background-color: var(--primary-color);

    z-index: 1;
  }
  .path {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: var(--primary-color);
    border-bottom-right-radius: 55px;
    border-top-right-radius: 55px;
    position: relative;
    z-index: 1;
    div {
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 30px 15px 30px 30px;
      h4 {
        padding-bottom: 5px;
        font-weight: 400;
        font-size: 16px;
      }
      p {
        font-size: 12px;
        color: ;
      }
    }
  }
  .company-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 20px;
    justify-content: center;
    width: 50%;
    background-color: var(--secoundary-color);
    z-index: 1;
    padding: 10px;
    h4 {
      padding-bottom: 15px;
      font-weight: 400;
      font-size: 16px;
    }
  }

  /* ::before {
    content: "";
    width: 40vw;
    background-color: var(--primary-color);
    height: 110px;
    position: absolute;
    z-index: 0;
    left: 0;
  }
  ::after {
    content: "";
    width: 40vw;
    background-color: var(--secoundary-color);
    height: 110px;
    position: absolute;
    z-index: 0;
    right: 0;
  } */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .path {
      display: none;
    }
    .company-info {
      align-items: center;
      justify-content: center;
    }
  }
`;
