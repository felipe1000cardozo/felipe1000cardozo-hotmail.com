import styled from "styled-components";

export const CarCard = styled.div`
  width: 224px;
  background-color: var(--four-color);
  border: 1px solid var(--primary-color);
  box-shadow: 2px 1px 5px #000000;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Image = styled.div`
  padding: 0 6px;
  height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 3%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CardInfos = styled.div`
  padding: 0 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Price = styled.h4`
  padding: 13px 0 0 0;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
