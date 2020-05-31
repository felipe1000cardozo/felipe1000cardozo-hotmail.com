import styled from "styled-components";

export const ContainerMenu = styled.div`
  label[for="btn-menu"] {
    padding: 5px;
    /* background-color: #222; */
    color: var(--secoundary-color);
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: none;
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
    /* height: 85px; */
    background-color: rgba(250, 250, 250, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
    z-index: 3;

    .image {
      /* width: 50%; */
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
        padding: 20px 20px;
        text-decoration: none;
        font-size: 20;
        font-weight: 500;
        color: var(--third-color);
        display: block;
        margin: 0 12px;
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

  @media (max-width: 800px) {
    label[for="btn-menu"] {
      display: block;
    }
    .menu-list li {
      width: 100%;
    }

    #btn-menu:checked ~ .main-menu {
      margin-top: 0;
      display: block;
      transition: all 0.8s;
    }
    .main-menu {
      margin-top: 5px;
      margin-top: -100%;
      transition: all 0.8s;
      display: none;
      text-align: center;
      margin-bottom: 12px;
    }
    .image {
      display none;
    }
  }
`;
