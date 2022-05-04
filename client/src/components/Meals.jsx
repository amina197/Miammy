import React, {useState} from 'react';
import Recipe from './Recipe.jsx';
import axios from 'axios';

export default function Meals({meals}) {
  const [activeMeal, setActiveMeal] = useState(null);

  const mealClicked = (e) => {
    setActiveMeal(e.target.attributes['data-key'].value);
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

  const allMeals = meals.map(meal =>
    <div key={meal.idMeal} data-key={meal.idMeal} onClick={mealClicked}>
      <h1 data-key={meal.idMeal}>{meal.strMeal}</h1>
      <img src={meal.strMealThumb + '/preview'} alt={meal.strMeal} data-key={meal.idMeal}/>
      <button data-key={meal.idMeal}>Select</button>
      <button onClick={favoriteClicked} data-key={meal.idMeal} data-title={meal.strMeal} data-thumb={meal.strMealThumb + '/preview'}>Add to favorites</button>
    </div>
  );

  return(<div>
    {allMeals}
    <Recipe mealId={activeMeal}/>
  </div>)
}