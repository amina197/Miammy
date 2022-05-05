import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Recipe from './Recipe.jsx';
import {useNavigate} from 'react-router-dom';
import {SFavoriteContainer, SMealContainer, STitleContainer, SSectionWrapper, SMealsWrapper} from './../styled/S-Favorite.js';

export default function Favorites() {
  const [faves, setFaves] = useState([]);
  const [activeMeal, setActiveMeal] = useState(null);
  const navigate = useNavigate();

  const mealClicked = (e) => {
    navigate('/recipe', {state: {mealId: e.target.attributes['data-key'].value}});
  };

  useEffect(() => {
    axios.get('/favorites')
      .then(({data}) => setFaves(data))
      .catch(err => console.log(err))
  }, []);

  const allFavorites = faves.map(fave =>
    <SMealContainer key={fave.idMeal} data-key={fave.idMeal} onClick={mealClicked} img={fave.strMealThumb}>
      <STitleContainer>
        <h1 data-key={fave.idMeal}>{fave.strMeal}</h1>
      </STitleContainer>
    </SMealContainer>
  )

  return(<>
    <SFavoriteContainer>
      <SMealsWrapper>
        {allFavorites}
      </SMealsWrapper>
    </SFavoriteContainer>
  </>)
}