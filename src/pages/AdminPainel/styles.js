import styled from "styled-components";

export const StyledAdminPainel = styled.main`
  .container-buttons {
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 0 12px;
    #background-green {
      background-color: #12a612;
      margin-right: 12px;
      padding: 12px;
    }
    .h-100 {
      height: 100%;
    }
  }
`;

export const FormContainer = styled.form`
  #container-simple-inputs {
    display: flex;
    > div {
      display: flex;
      flex-direction: column;
    }
    > div:nth-child(1) {
      margin-right: 24px;
    }
  }

  .description-input-container {
    margin-top: 24px;
  }

  .add-photos-container {
    margin-top: 12px;
    p {
      color: #757575;
    }
    .photos-container {
      display: flex;
      height: fit-content;
      flex-wrap: wrap;
      max-width: 444px;
      .uploading {
        height: 103px;
        width: 136px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        height: 103px;
        object-fit: cover;
        max-width: 136px;
        margin: 0px 6px 6px 6px;
        border-radius: 2px;
      }
    }
  }
`;

export const AddPhotosButton = styled.label`
  width: 136px;
  height: 103px;
  border-radius: 2px;
  border: 1px dashed #757575;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 6px;
  #upload-photo-input {
    display: none;
  }
  p {
    font-size: 11px;
    margin-top: 4px;
  }
  svg {
    color: #757575;
  }
  &:hover {
    background-color: rgba(117, 117, 117, 0.3);
  }
`;
