import styled from "styled-components";

const SliderStyled = styled.div`
  color: var(--primary-color);
  position: relative;
  height: 420px;
  background-color: var(--four-color);
  img {
    width: 100%;
    height: 420px;
    position: absolute;
  }
  .arrowLeft,
  .arrowRight,
  .subtitle,
  .dots {
    position: absolute;
    z-index: 1;
  }
  .arrowLeft {
    display: flex;
    height: 100%;
    align-items: center;
    left: 56px;
  }
  .arrowRight {
    display: flex;
    height: 100%;
    align-items: center;
    right: 56px;
  }
  .dots {
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 22px;
  }
  .subtitle {
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 56px;
  }
`;

export { SliderStyled };
