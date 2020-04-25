import styled from "styled-components";

export const Foot = styled.div`
  display: flex;
  max-width: 1114px;
  height: 110px;
  color: var(--four-color);
`;
export const Path = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: var(--primary-color);
  position: relative;
  &:after {
    content: "";
    height: 100%;
    width: 130px;
    background-color: inherit;
    right: -65px;
    position: absolute;
    z-index: 1;
    transform: skewX(230deg);
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
  justify-content: center;
  width: 50%;
  background-color: var(--secoundary-color);
  box-shadow: inset 0px 4px 4px var(--primary-color);
`;
