import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline:0;
   box-sizing: border-box;
 }
 html, body, #root{
   min-height: 100%;
 }
 body{
   font-size: 14px;
   background-color: var(--secoundary-color);
   -webkit-font-smoothing: antialiased !important;
   
 }
 body, input, button{
   color: #222;
   font-size: 14px;
   font-family:'Rubik', sans-serif;
 }
 button{
   cursor: pointer;
 }
 a{
   display: contents;
   text-decoration: none;
 }
 #root{
     width: 100%;
     max-width: 1114px;
     margin: 0 auto;
 }
 ::placeholder{
    color: var(--text-color);
    opacity: 0.8;
    font-weight:300;
}
:root{
     --primary-color:#0375B4;
     --secoundary-color:#DFDCE3; 
     --third-color: #279FE1;
     --four-color:#fff;
     --text-color: #fafafa;
  }
`;