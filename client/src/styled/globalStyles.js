import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Patrick Hand', cursive;
    font-size: 1.1rem;
    color: #141B21;
  }

  h2 {
    font-family: 'Patrick Hand', cursive;
    font-size: 1.4rem;
  }

  h3 {
    font-family: 'Patrick Hand', cursive;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
`;

export default GlobalStyle;
