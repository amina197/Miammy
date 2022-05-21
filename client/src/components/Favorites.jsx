import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  SFavoriteContainer,
  SMealContainer,
  STitleContainer,
  SMealsWrapper,
} from '../styled/S-Favorite';

export default function Favorites() {
  const [faves, setFaves] = useState([]);
  const navigate = useNavigate();

  const mealClicked = (e) => {
    navigate('/recipe', { state: { mealId: e.target.attributes['data-key'].value } });
  };

  const deleteClicked = (e) => {
    axios.delete('/favorite/delete', { data: { id: e.target.attributes['data-key'].value } })
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios.get('/favorites')
      .then(({ data }) => setFaves(data))
      .catch((err) => console.error(err));
  }, []);

  const allFavorites = faves.map((fave) => (
    <SMealContainer key={fave.idMeal} data-key={fave.idMeal} img={fave.strMealThumb}>
      <STitleContainer onClick={mealClicked}>
        <h1 data-key={fave.idMeal}>{fave.strMeal}</h1>
      </STitleContainer>
      <button type="button" onClick={deleteClicked} data-key={fave.idMeal}>x</button>
    </SMealContainer>
  ));

  return (
    <SFavoriteContainer>
      <SMealsWrapper>
        {allFavorites}
      </SMealsWrapper>
    </SFavoriteContainer>
  );
}