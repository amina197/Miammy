import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.1rem;
    color: #333333;
  }

  button {
    font-family: coldsmith-pro,sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 3px 17px;
    background: transparent;
    border: 1px solid #506700;
    border-radius: 20px;
    outline: none;
    text-transform: uppercase;
  }

  h1 {
    margin-top: 12%;
    font-family: coldsmith-pro,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 11rem;
    line-height: 8rem;
  }

  h2 {
    font-family: "Trattatello", serif;
    font-size: 2rem;
    text-align: center;
  }
`;

export default GlobalStyle;
