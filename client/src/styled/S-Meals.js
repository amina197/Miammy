import styled from 'styled-components';

export const SMealsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const SMealsContainer = styled.div`
  display: flex;
  max-width: 80%;
  height: 250px;
  position: relative;
  overflow: scroll;
  white-space: no-wrap;
  flex-wrap: wrap;
`;

export const SMealContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 200px;
  height: 180px;

  margin-right: 10px;
  margin-top: 10px;
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

  background-image: url(${({ img }) => img}), linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100%;
  padding: 0 1rem;
  border-radius: 3px;

  overflow: hidden;
  backface-visibility: hidden;
  transition: transform .6s linear;

  transform: perspective(600px) rotateY(0deg);
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
  border-radius: 3px;

  background-color: var(--main-color);

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
    border-bottom: 1px solid #fff;
    margin-top: 10px;

    transition: var(--btn-transition);
  }

  button:hover {
    font-size: 1.3rem;
    border-bottom: 2px solid #fff;
  }
`;
