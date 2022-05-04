import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

export default function Recipe(props) {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [youtube, setYoutube] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const {mealId} = location.state;
      if (mealId || mealId === 0) {
        axios.get(`/api/meals/recipe?id=${mealId}`)
          .then((({data}) => {
            setRecipe(data);
          }))
          .catch(err => console.log('Error client retrieveing meal recipe', err));
      }
    }
  }, [location.state]);

  useEffect(() => {
    const findIngredients = () => {
      const recipeInfos = Object.entries(recipe)
        .filter(info => info[0].includes('strIngredient')
          && info[1])
        .map(ingredient => ingredient[1])

      setIngredients(recipeInfos);
    };

    const findMeasures = () => {
      const recipeInfos = Object.entries(recipe)
        .filter(info => info[0].includes('strMeasure')
          && info[1])
        .map(ingredient => ingredient[1])

      setMeasures(recipeInfos);
    };

    if (recipe.strYoutube) {
      setYoutube(recipe.strYoutube.split('watch?v=')[1]);
    }

    findIngredients();
    findMeasures();
  }, [recipe])

  const ingredientsMeasures = ingredients.map((ingredient, i) =>
    <li key={i}>{ingredient} - {measures[i]}</li>
  )

  return(<div>
    <img src={recipe.strMealThumb}/>
    <h1>{recipe.strMeal}</h1>
    <span>{recipe.strCategory} </span>
    <span>{recipe.strArea}</span>
    <ul>{ingredientsMeasures}</ul>
    { youtube ? <iframe src={`https://www.youtube.com/embed/${youtube}`}></iframe> : null}
    <p>{recipe.strInstructions}</p>
  </div>)
}