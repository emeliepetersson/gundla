import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    scroll-behavior: smooth;
  }
  main{
    overflow:hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2 {
    font-family: 'Noto Serif', serif;
    font-weight: 500;
    font-size: 1.5em;
  }

  p, h3 {
    font-size: 1em;
    line-height: 1.5;
  }

  p {
    font-weight: 400;
  }

  h2, p, h3 {
    margin: 0;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    outline: none;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
&::-moz-focus-inner {
    border: 0;
    padding: 0;
}
`;

export default GlobalStyle;
