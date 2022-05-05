import styled from 'styled-components';

export const SMealsWrapper = styled.div`
  display: flex;
  max-width: 75%;
  height: 400px;
  position: relative;
  overflow: scroll;
  white-space: no-wrap;
  flex-wrap: wrap;
`

export const SMealsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

export const SMealContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 180px;

  background-image: url(${({img}) => img}), linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  background-size: cover;
  background-position: center;

  margin-right: 10px;
  margin-top: 10px;
  border-radius: 3px;

  span {
    align-self: end;
    justify-self: flex-end;
    border: none;
    background-color: #fff;
    padding: 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  span:hover {
    color: #9BB542;
    cursor: pointer;
  }
`

export const STitleContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: #f1f2f6;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  text-align: center;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  h1 {
    font-size: 1rem;
    opacity: 1;
  }
`