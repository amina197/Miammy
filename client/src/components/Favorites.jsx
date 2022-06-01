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
        <FrontCard>
          <h1>{fave.strMeal}</h1>
        </FrontCard>
        <BackCard>
          <button data-key={fave.idMeal} type="button" onClick={checkRecipe}>Check Recipe</button>
          <button data-key={fave.idMeal} type="button" onClick={deleteFave}>Remove</button>
        </BackCard>
      </FullCard>
    </SMealWrapper>
  ));

  const emptyFavorites = (
    <SMealWrapper>
      <FullCard>
        <FrontCard>
          <h1>No recipes have been added to your favorites yet.</h1>
        </FrontCard>
      </FullCard>
    </SMealWrapper>
  );

  const noFavorites = (
    <SMealWrapper>
      <FullCard>
        <FrontCard style={{ backgroundColor: 'var(--discreet-color)', border: '0' }}>
          <h1>No recipe yet.</h1>
        </FrontCard>
      </FullCard>
    </SMealWrapper>
  );

  return (
    <SFavoritesWrapper>
      <SFavoritesContainer>
        { allFavorites }
        { faves.length <= 2 ? noFavorites : null }
        { faves.length <= 1 ? noFavorites : null }
        { !faves.length ? noFavorites : null }
      </SFavoritesContainer>
    </SFavoritesWrapper>
  );
}
