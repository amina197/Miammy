import styled from 'styled-components';

export const SRecipeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const SImageContainer = styled.div`
  min-height: 1000px;
  width: 40%;
  display: flex;
  justify-content: end;

  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;

  top: 0;
  position: sticky;
  position: -webkit-sticky;

  iframe {
    height: 18%;
    padding: 0.6rem 0 0.6rem 0.6rem;
    background-color: #fff;
    border: none;
    margin-top: 3rem;
  }
`;

export const SVideoIngredientContainer = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  width: 60%;
`;

export const SIngredientInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.6rem;
    text-align: center;
    font-family: 'Pacifico', cursive;
  }

  span {
    font-size: 1.5rem;
    align-self: center;
    justify-self: center;
    text-align: center;
  }

  ul {
    margin: 1rem 0
  }

  p {
    margin: 0 15%;
  }
`;
