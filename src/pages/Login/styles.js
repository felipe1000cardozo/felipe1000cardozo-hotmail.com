import styled from "styled-components";

const LoginBox = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  padding: 16px;
  border: 1px solid rgb(158, 158, 158);
  border-radius: 16px;
  form {
    display: flex;
    flex-direction: column;
    .MuiFormControl-root {
      margin: 8px 12px 12px 12px;
    }
  }
`;
export { LoginBox };
