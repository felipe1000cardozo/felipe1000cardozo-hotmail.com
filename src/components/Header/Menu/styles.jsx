import styled from "styled-components";

export const ContainerMenu = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;

  label[for="btn-menu"] {
    padding: 5px 5px 0 5px;
    background-color: rgba(250, 250, 250, 0.8);
    text-align: end;
    font-size: 30px;

    width: 100%;
    display: none;
    svg {
      cursor: pointer;
      color: var(--secoundary-color);
    }
  }

  #btn-menu {
    display: none;
  }

  .main-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(250, 250, 250, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .image {
      margin-left: 50px;

      img {
        width: 67px;
        height: 67px;
      }
    }

    .menu-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      li {
        list-style: none;
        position: relative;
      }

      a {
        padding: 10px 20px;
        text-decoration: none;
        font-size: 20;
        font-weight: 500;
        color: var(--third-color);
        display: block;
        margin: 10px 12px;
      }
      a:hover {
        color: var(--secoundary-color);
        border-bottom: 3px solid var(--secoundary-color);
      }
      .active {
        color: var(--secoundary-color);
        border-bottom: 3px solid var(--secoundary-color);
      }
    }
  }

  @media (max-width: 768px) {
    label[for="btn-menu"] {
      display: block;
    }
    .menu-list li {
      width: 100%;
    }

    #btn-menu:checked ~ .main-menu {
      margin-top: 0;
      justify-content: center;
    }

    .main-menu {
      margin-top: 5px;
      margin-top: -100%;
      transition: all 0.4s linear;
      text-align: center;
      margin-bottom: 12px;
      justify-content: center;
    }
    .image {
      display: none;
    }
  }
`;
