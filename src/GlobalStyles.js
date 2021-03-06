import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body, html, #root {
width: 100%;
height: 100%;
background-color: #0F0F0F;
}
`;

export default GlobalStyles;
