import React, {useState} from 'react';
import Recipe from './Recipe.jsx';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';

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
    <div key={meal.idMeal} data-key={meal.idMeal}>
      <h1 data-key={meal.idMeal} onClick={mealClicked}>{meal.strMeal}</h1>
      <img src={meal.strMealThumb + '/preview'} alt={meal.strMeal} data-key={meal.idMeal} onClick={mealClicked}/>
      <button data-key={meal.idMeal} onClick={mealClicked}>Select</button>
      <button onClick={favoriteClicked} data-key={meal.idMeal} data-title={meal.strMeal} data-thumb={meal.strMealThumb + '/preview'}>Add to favorites</button>
    </div>
  );

  return(
  <div>
    {allMeals}
  </div>)
}