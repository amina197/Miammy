import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  SFavoritesWrapper,
  SMealWrapper,
  SFavoritesContainer,
  FullCard,
  FrontCard,
  BackCard,
} from '../styled/S-Favorite';

export default function Favorites() {
  const [faves, setFaves] = useState([]);
  const navigate = useNavigate();

  const fetchFavorites = () => {
    axios.get('/favorites', { params: { uid: localStorage.getItem('user') } })
      .then(({ data }) => setFaves(data[0].favorites))
      .catch((err) => console.error(err));
  };

  const checkRecipe = (e) => {
    navigate('/recipe', { state: { mealId: e.target.attributes['data-key'].value } });
  };

  const deleteFave = (e) => {
    axios.delete('/favorites/delete', { data: { id: e.target.attributes['data-key'].value } })
      .then(() => fetchFavorites())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const allFavorites = faves.map((fave) => (
    <SMealWrapper key={fave.idMeal}>
      <FullCard>
        <FrontCard img={`${fave.strMealThumb}`}>
          <h1>{fave.strMeal}</h1>
        </FrontCard>
        <BackCard>
          <button data-key={fave.idMeal} type="button" onClick={checkRecipe}>Check Recipe</button>
          <button data-key={fave.idMeal} type="button" onClick={deleteFave}>Remove</button>
        </BackCard>
      </FullCard>
    </SMealWrapper>
  ));

  return (
    <SFavoritesWrapper>
      <SFavoritesContainer>
        {allFavorites}
      </SFavoritesContainer>
    </SFavoritesWrapper>
  );
}
