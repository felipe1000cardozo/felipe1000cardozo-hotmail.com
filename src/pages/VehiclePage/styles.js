import styled from "styled-components";

export const MainVehiclePage = styled.div`
  display: flex;
  padding: 18px;
  justify-content: space-between;
  .title {
    position: relative;
    font-size: 18px;
    z-index: 2;
    top: 3%;
    left: 9%;
    width: fit-content;
  }
  .infos-vehicle {
    border-radius: 4px;
    box-shadow: 0px 0px 8px 0px var(--third-color);
    padding: 24px;
    margin: 24px 0 0 24px;
    height: 414px;
    width: 35%;
    position: relative;
    div {
      display: flex;
      p {
        padding: 10px 0 0 20px;
      }
    }
    h4 {
      margin-top: 12px;
    }

    &:after {
      content: "";
      height: 10%;
      width: 45%;
      top: -4%;
      background-color: var(--secoundary-color);
      right: 55%;
      position: absolute;
      z-index: 1;
      transform: skewX(230deg);
    }
    .price {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      position: relative;
      top: -8%;
      left: -34%;
      z-index: 2;
    }
  }
`;
