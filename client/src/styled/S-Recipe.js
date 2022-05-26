import styled from 'styled-components';

export const SRecipeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 25px 0;

  img {
    height: 42vh;
  }
`;

export const SRecipeInstructionsHeaderContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-family: var(--heading-font);
    font-size: 1.3rem;
  }

  button {
    margin-left: 10px;
    border: var(--btn-border);
    border-radius: var(--btn-radius);
    padding: var(--btn-padding);
    font-family: var(--heading-font);
    background-color: transparent;
    transition: var(--btn-transition);
  }

  button:hover {
    color: #fff;
    background-color: var(--accent-color);
    cursor: pointer;
  }
`;

export const SRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 45%;

  p {
    font-family: var(--body-font);
    font-size: .8rem;
    margin-bottom: 10px;
  }
`;

export const SIngredientsList = styled.ul`
  li {
    font-family: var(--body-font);
    font-size: .8rem;
  }
`;

export const SInstructionsContainer = styled.div`
  height: 35vh;
  overflow: scroll;
  white-space: no-wrap;
  background-color: var(--very-discreet-color);
  border-radius: 5px;
  padding: 15px;
`;
