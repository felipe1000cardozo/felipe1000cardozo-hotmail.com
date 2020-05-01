import styled from "styled-components";

export const StyledVehiclesList = styled.main`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    h2 {
      font-weight: 400;
    }
    > div {
      width: fit-content;
    }
  }
  .header-list {
    display: flex;
    padding: 12px;
    > div {
      text-align: center;
      width: 20%;
    }
    div:nth-child(1) {
      width: 5%;
    }
    div:nth-child(2) {
      width: 15%;
    }
  }
  .list-item {
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;
    padding: 14px;
    > div {
      text-align: center;
      width: 20%;

      button {
        border: none;
        background-color: inherit;
        margin: 0 6px;
        &:hover {
          opacity: 0.6;
        }
      }
    }
    div:nth-child(1) {
      width: 5%;
    }
    div:nth-child(2) {
      width: 15%;
    }
  }
`;
