import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
       --primary-color:#0375B4;
       --secoundary-color:#279FE1; 
       --third-color: #0000008a;
       --four-color:#fff;
       --background-color: #f3f5f8;
       --text-color: #fafafa;
    }
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
   background-color: rgb(250,250,250);
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
    -webkit-box-shadow: 0px 0px 10px 0px rgba(180,180,180,1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(180,180,180,1);
    box-shadow: 0px 0px 10px 0px rgba(180,180,180,1);
 }
 ::placeholder{
    color: var(--text-color);
    opacity: 0.8;
    font-weight:300;
}
`;
