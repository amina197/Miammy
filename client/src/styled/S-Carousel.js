import styled from 'styled-components';

const SCarousel = styled.div`
  height: 45vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-position: center;
  overflow: hidden;

  h1 {
    margin-top: 7%;
    font-family: var(--heading-font);
    font-size: 5rem;
    line-height: 2rem;
  }

  h2 {
    font-family: var(--subheading-font);
    font-size: 2.5rem;
    text-align: center;
  }

  input, button {
    margin-bottom: 1rem;
    padding: 2px 8px;
    border-radius: var(--btn-radius);
    font-family: var(--heading-font);
    text-align: center;
    background-color: var(--accent-color);
    color: #fff;
    border: var(--btn-border);
    transition: var(--btn-transition);
  }

  input {
    width: 15%;
  }

  button {
    min-width: 10%;
  }

  button:hover,
  input:hover,
  input:active,
  input:focus {
    background-color: var(--main-color);
    cursor: pointer;
  }

  input::placeholder {
    color: #fff;
  }

  input:focus::placeholder {
    color: transparent;
  }
`;

export default SCarousel;
