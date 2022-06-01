import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    color: #333333;
    font-weight: 400;
  }

  html {
    --accent-color: #506700;
    --main-color: #333333;
    --discreet-color: rgba(51, 51, 51, .13);
    --very-discreet-color: rgba(51, 51, 51, .06);
    --negative-color:  #EC591C;
    --heading-font: coldsmith-pro,sans-serif;
    --subheading-font: "Trattatello", serif;
    --body-font: 'Hind Siliguri', sans-serif;
    --btn-radius: 20px;
    --btn-padding: 3px 17px;
    --btn-border: 1.5px solid var(--accent-color);
    --btn-bg: transparent;
    --btn-transition: .3s ease-in-out;
  }
`;

export default GlobalStyle;
