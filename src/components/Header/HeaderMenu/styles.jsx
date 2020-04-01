import styled from "styled-components";

export const Header = styled.header`
display: flex;
max-width: 1114px;
height:40px;

p{
    color: #fff;
    font-size: 14px;
    font-weight: 500; 
    padding:7px
}
`;

export const Place = styled.div`
display: flex;
align-items:center;
justify-content: center;
width:58%;
background-color: var(--primary-color);
`;

export const Contact = styled.div`
display: flex;
align-items: center;
justify-content:center;
width:42%;
background-color: var(--third-color);

`