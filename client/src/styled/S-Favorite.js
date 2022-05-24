import styled from 'styled-components';

export const SFavoritesWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  white-space: no-wrap;

  display: flex;
  align-items: center;
`;

export const SFavoritesContainer = styled.div`
  display: flex;
`;

export const SMealWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 170px;
  margin-right: 10px;
  padding: 0 1rem;
`;

export const FullCard = styled.div`
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  &:hover div:first-of-type {
    transform: perspective(600px) rotateY(-180deg);
  }

  &:hover div:last-of-type {
    transform: perspective(600px) rotateY(0deg);
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-family: var(--heading-font);
    font-weight: 400;
  }
`;

export const FrontCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0 1rem;

  border-radius: 10px;
  box-shadow: 0 0 0 .5 rgba(0, 0, 0, 0.05);
  border: var(--btn-border);

  overflow: hidden;
  backface-visibility: hidden;
  transition: transform .6s linear;

  transform: perspective(600px) rotateY(0deg);

  h1 {
    color: var(--accent-color);
  }
`;

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;
  padding: 0 .5rem;

  background-color: var(--accent-color);
  border-radius: 10px;
  box-shadow: 0 0 0 .5 rgba(0, 0, 0, 0.05);
  border: var(--btn-border);

  overflow: hidden;
  backface-visibility: hidden;
  transition: transform .6s linear;

  transform: perspective(600px) rotateY(180deg);

  h1 {
    color: #fff;
  }

  button {
    border: 0;
    padding: 3px 0;
    width: 80%;

    background-color: transparent;
    color: #fff;

    font-family: var(--heading-font);
    font-weight: 400;
    font-size: 1rem;

    transition: var(--btn-transition);
  }

  button:first-of-type {
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
  }

  button:first-of-type:hover {
    font-size: 1.3rem;
    border-bottom: 2px solid #fff;
  }

  button:last-of-type {
    border-bottom: 1px solid #fff;
  }

  button:last-of-type:hover {
    font-size: 1.3rem;
    border-bottom: 2px solid var(--negative-color);
    color: var(--negative-color);
  }


`;
