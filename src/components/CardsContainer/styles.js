import styled from "styled-components";

const CardsContainerStyled = styled.main`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: var(--background-color);
  .MuiPaginationItem-page.Mui-selected {
    background-color: var(--secoundary-color);
  }
  .MuiPagination-root {
    width: fit-content;
  }
  .container-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  > div {
    margin: 16px;
  }
`;
export { CardsContainerStyled };
