import React, {useState} from 'react';
import Recipe from './Recipe.jsx';

export default function Meals({meals}) {
  const [activeMeal, setActiveMeal] = useState(null);

  const mealClicked = (e) => {
    setActiveMeal(e.target.attributes['data-key'].value);
  }

  const allMeals = meals.map(meal =>
    <div key={meal.idMeal} data-key={meal.idMeal} onClick={mealClicked}>
      <h1 data-key={meal.idMeal}>{meal.strMeal}</h1>
      <img src={meal.strMealThumb + '/preview'} alt={meal.strMeal} data-key={meal.idMeal}/>
      <button data-key={meal.idMeal}>Select</button>
    </div>
  )

  return(<div>
    {allMeals}
    <Recipe mealId={activeMeal}/>
  </div>)
}