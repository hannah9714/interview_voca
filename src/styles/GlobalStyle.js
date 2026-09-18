import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  html, body, #root {
    margin: 0;
    width: 100%;
    min-height: 100%;
  }

  body {
    background: #ddd8cf;
    font-family: -apple-system, BlinkMacSystemFont, "Pretendard",
      "Noto Sans KR", Arial, sans-serif;
    color: #142b4a;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font: inherit;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
