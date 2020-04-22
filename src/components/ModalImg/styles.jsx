import styled from "styled-components";

export const BackgroundModal = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
`;
export const ImgModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  img {
    max-height: 80vh;
    max-width: 80vw;
    cursor: default;
  }
  .close-icon-container {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    :hover {
      background-color: rgba(0, 0, 0, 0.54);
    }
  }
`;
