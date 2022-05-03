import React from 'react';

export default function Meals({meals}) {

  const allMeals = meals.map(meal =>
    <div key={meal.idMeal}>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal}/>
    </div>
  )
  return(<div>
    {allMeals}
  </div>)
}