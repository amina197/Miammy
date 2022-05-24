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
    --discreet-color: rgba(51, 51, 51, .13);
    --heading-font: coldsmith-pro,sans-serif;
    --subheading-font: "Trattatello", serif;
    --body-font: 'Hind Siliguri', sans-serif;
    --btn-radius: 20px;
    --btn-padding: 3px 17px;
    --btn-border: 1px solid var(--accent-color);
    --btn-bg: transparent;
    --btn-transition: .3s ease-in-out;
  }
`;

export default GlobalStyle;
