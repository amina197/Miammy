import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.1rem;
    color: #333333;
  }

  html {
    --accent-color: #506700;
    --main-color: #333333;
    --heading-font: coldsmith-pro,sans-serif;
    --subheading-font: "Trattatello", serif;
    --body-font: 'Hind Siliguri', sans-serif;
    --btn-radius: 20px;
    --btn-padding: 3px 17px;
    --btn-border: 1px solid var(--accent-color);
    --btn-bg: transparent;
    --btn-transition: .3s ease-in-out;
  }

  h1 {
    margin-top: 12%;
    font-family: var(--heading-font);
    font-weight: 400;
    font-size: 11rem;
    line-height: 8rem;
  }

  h2 {
    font-family: var(--subheading-font);
    font-size: 2rem;
    text-align: center;
  }
`;

export default GlobalStyle;
