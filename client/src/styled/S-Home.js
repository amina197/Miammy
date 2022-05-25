import styled from 'styled-components';

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
  max-width: 34%;
  margin-right: 3rem;

  p {
    font-family: var(--subheading-font);
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

    transition: var(--btn-transition);
  }

  select:hover,
  select:active,
  select:focus {
    cursor: pointer;
    background-color: var(--discreet-color);
  }

  option {
    font-family: var(--heading-font);
    // font-size: .8rem;
  }

  button {
    background-color: var(--accent-color);
    color: #fff;
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
