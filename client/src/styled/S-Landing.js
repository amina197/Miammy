import styled from 'styled-components';

export const SLandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100vh;

  h1 {
    margin-top: 12%;
    font-family: var(--heading-font);
    font-weight: 400;
    font-size: 11rem;
    line-height: 9rem;
  }

  h2 {
    font-family: var(--subheading-font);
    font-size: 2rem;
    text-align: center;
  }
`;

export const SLandingSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  background-image: url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-position: center;
  overflow: hidden;

  width: 100%;
  height: 100%;

  button {
    font-family: var(--heading-font);
    font-size: 1.3rem;
    border: var(--btn-border);
    border-radius: var(--btn-radius);
    padding: 5px 23px;
    margin-top: 2rem;

    transition: var(--btn-transition);
  }

  button:hover {
    cursor: pointer;
    background-color: var(--accent-color);
    color: #fff;
  }
`;
