import styled from "styled-components";

export const MainVehiclePage = styled.div`
  display: flex;
  padding: 18px;
  .infos-vehicle {
    /* border: 1px solid var(--secoundary-color); */
    padding: 24px;
    margin: 24px 0 0 24px;
    height: 513px;
    background-color: var(--four-color);
    p {
      padding-bottom: 8px;
    }
    .price {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      padding-bottom: 12px;
    }
  }
`;
