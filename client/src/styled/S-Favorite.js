import styled from 'styled-components';

export const SFavoriteContainer = styled.div`
  width: 70%;
  height: 200px;
  overflow-y: scroll;
  white-space: no-wrap;

  display: flex;
`

export const SMealContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 180px;

  // background-image: url(${({img}) => img}), linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5));
  background-color: #9BB542;
  background-size: cover;
  background-position: center;

  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);
`

export const STitleContainer = styled.div`
  width: 100%;
  height: 40%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: dashed 0.1rem #fff;
  border-bottom: dashed 0.1rem #fff;
  background-color: rgba(255, 255, 255, 0.15);

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    color: #fff;
  }
`

export const SMealsWrapper = styled.div`
  display: flex;
`