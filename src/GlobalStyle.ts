import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 1. Reset & Base box model */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* 2. Reset default margins */
  body,
  h1, h2, h3, h4, h5, h6,
  p, ul, ol, figure,
  blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* 3. Set "safe" defaults */
  html, body {
    height: 100%;
    font-family: 'Inter', system-ui, sans-serif;
    background-color: #e5e5e5;
    color: #222;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  /* 4. Remove list styles */
  ul,
  ol {
    list-style: none;
  }

  /* 5. Set images to block to prevent baseline whitespace */
  img,
  picture {
    display: block;
    max-width: 100%;
  }

  /* 6. Anchors inherit color and don't have underline by default */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 7. Buttons reset with pointer cursor */
  button {
    font: inherit;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  /* 8. Smooth expand layout fix */
  [data-accordion-content] {
    overflow: hidden;
    transition: height 0.3s ease;
  }

  /* 9. Prevent margin collapse issues */
  main, section, article {
    overflow-anchor: auto;
    padding-bottom: 1px; /* prevents collapsing bottom margin */
  }
`;

export default GlobalStyle;
