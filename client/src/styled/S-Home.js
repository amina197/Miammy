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
  width: 34%;
  margin-right: 6rem;

  p {
    font-family: var(--subheading-font);
    padding: .3rem 0;
  }
`;

export const HomeFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  p {
    font-family: var(--subheading-font);
    text-align: center;
    padding: 0.3rem 0;
  }
`;

export const SFiltersWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  select {
    font-family: var(--heading-font);
    background-color: transparent;
    border: var(--btn-border);
    border-radius: var(--btn-radius);
    padding: var(--btn-padding);
    text-align: center;
    width: 100%;
    color: var(--accent-color);

    transition: var(--btn-transition);
  }

  select:hover {
    cursor: pointer;
    color: #fff;
    background-color: var(--accent-color);
  }

  button {
    background-color: var(--discreet-color);
    border: 0;
    padding: var(--btn-padding);
    border-radius: var(--btn-radius);
    margin-left: 3px;
    font-family: var(--heading-font);

    transition: var(--btn-transition);
  }

  button:hover {
    cursor: pointer;
    background-color: var(--main-color);
    color: #fff;
  }
`;
