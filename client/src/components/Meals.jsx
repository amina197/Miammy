import React, {useState} from 'react';
import Recipe from './Recipe.jsx';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import {SMealsWrapper, SMealsContainer, SMealContainer, STitleContainer} from './../styled/S-Meals.js';
import {SHeader} from './../styled/S-Header.js';
import GlobalStyle from './../styled/globalStyles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Meals(meals) {
  const location = useLocation();
  const navigate = useNavigate();

  const mealClicked = (e) => {
    navigate('/recipe', {state: {mealId: e.target.attributes['data-key'].value}});
  };

  const favoriteClicked = (e) => {
    axios.post('/favorite/add', {
      params: {
        id: e.target.attributes['data-key'].value,
        title: e.target.attributes['data-title'].value,
        thumbnail: e.target.attributes['data-thumb'].value
      }
    })
      .then(({data}) => console.log(data))
      .catch(err => console.log(err));
  }

  const allMeals = location.state.meals.map(meal =>
    <SMealContainer key={meal.idMeal} data-key={meal.idMeal} img={meal.strMealThumb + '/preview'}>
      <STitleContainer data-key={meal.idMeal} onClick={mealClicked}>
        <h1 data-key={meal.idMeal} onClick={mealClicked}>{meal.strMeal}</h1>
      </STitleContainer>
      <span onClick={favoriteClicked} data-key={meal.idMeal} data-title={meal.strMeal} data-thumb={meal.strMealThumb + '/preview'}><FontAwesomeIcon icon={faHeart} size="sm" className="heart" beat/></span>
    </SMealContainer>
  );

  return(<>
  <GlobalStyle/>
  <SHeader>
    <h1>Meals</h1>
  </SHeader>
  <SMealsContainer>
    <SMealsWrapper>
      {allMeals}
    </SMealsWrapper>
  </SMealsContainer>
  </>)
}