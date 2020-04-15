import styled from "styled-components";

const StyledStock = styled.main`
  > div {
    display: flex;
    .search-container {
      > div {
        position: relative;
      }
      margin: 28px;
      width: 50%;
      display: flex;
      align-items: flex-end;
      .MuiFormLabel-root {
        color: rgba(0, 0, 0, 0.54);
      }
      .MuiInputBase-root {
        width: 300px;
      }
      .MuiInput-underline:after {
        border-bottom-color: var(--third-color);
      }
    }
  }
  #filter-tag {
    padding: 5px;
    position: absolute;
    background-color: #fafafa;
    top: -13px;
    left: 17px;
    z-index: 2;
    color: rgba(0, 0, 0, 0.54);
  }
  nav {
    width: 50%;
    margin: 28px;
    padding: 14px 14px 0 14px;
    display: flex;
    position: relative;
    .sub-container-filters {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 12px;
      .MuiSlider-root {
        color: var(--third-color);
      }
      .MuiFormControl-root label {
        color: rgba(0, 0, 0, 0.54);
      }
      .MuiInput-underline:after {
        border-bottom-color: var(--third-color);
      }
      span {
        /* color: var(); */
      }
    }
    .sub-container-filters:nth-child(3) {
      align-items: flex-end;
    }
  }
  .order {
    width: 100%;
    background-color: #f3f5f8;
    display: flex;
    justify-content: flex-end;
    .MuiFormControl-root {
      width: 212px;
      padding: 12px 28px;
    }
    .MuiInputLabel-formControl {
      top: 12px;
      left: 28px;
      color: rgba(0, 0, 0, 0.54);
    }
    .MuiInput-underline:after {
      border-bottom-color: var(--third-color);
    }
  }
`;

export { StyledStock };
