import styled from 'styled-components';

export const SCarousel = styled.div`
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
    font-weight: 400;
    line-height: 2rem;
  }

  h2 {
    font-family: var(--subheading-font);
    font-size: 2.5rem;
    text-align: center;
    font-weight: 400;
  }
`;

export const SHomeBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48vh;
  width: 100%;
`;

export const HomeFavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-right: 10rem;

  p {
    font-family: var(--subheading-font);
    padding: .3rem 0;
  }
`;
