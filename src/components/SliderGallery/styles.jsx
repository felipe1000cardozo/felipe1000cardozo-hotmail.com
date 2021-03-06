import styled from "styled-components";

const SliderStyled = styled.div`
  color: var(--primary-color);
  width: 650px;
  padding: 0 24px 24px 24px;

  .main-img-container {
    position: relative;
    height: fit-content;
    span {
      height: 9%;
      width: 35%;
      top: -3%;
      background-color: var(--secoundary-color);
      left: 0;
      position: absolute;
      z-index: 1;
      transform: skewX(230deg);
    }
  }
  img {
    width: 100%;
    cursor: zoom-in;
    box-shadow: 0px 0px 8px 0px var(--third-color);
    border-radius: 4px;
  }
  .selected {
    border: 3px solid var(--secoundary-color);
  }

  .arrowLeft,
  .arrowRight {
    position: absolute;
    z-index: 2;
    cursor: pointer;
    opacity: 0;

    :hover {
      transition: 0.5s;
      opacity: 1;
    }
  }

  .arrowLeft {
    display: flex;
    height: 100%;
    align-items: center;
    left: 0;
    padding: 0 40px 0 20px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .arrowRight {
    display: flex;
    height: 100%;
    align-items: center;
    right: 0;
    padding: 0 20px 0 40px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
  .miniature-img-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 12px 0;
    img {
      /* height: 130px; */
      width: 23%;
      margin: 0 8px 8px 0;
      cursor: pointer;
    }
  }
  .miniature-img-container img:nth-child(4n + 1) {
    margin-left: 0;
  }
`;

export { SliderStyled };
