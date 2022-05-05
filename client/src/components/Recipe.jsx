import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import GlobalStyle from './../styled/globalStyles.js';
import {SImageContainer, SRecipeContainer, SVideoIngredientContainer, SIngredientInfoContainer} from './../styled/S-Recipe.js';

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

  return(
    <SRecipeContainer>
      <GlobalStyle/>
      <SImageContainer img={recipe.strMealThumb}>
        { youtube ? <iframe src={`https://www.youtube.com/embed/${youtube}`} style={{width: '50%'}} allow="fullscreen"></iframe> : null}
      </SImageContainer>
      <SVideoIngredientContainer>
        <SIngredientInfoContainer>
          <h1>{recipe.strMeal}</h1>
          <span>{recipe.strArea} | {recipe.strCategory} </span>
          <ul>{ingredientsMeasures}</ul>
          <p>{recipe.strInstructions}</p>
        </SIngredientInfoContainer>
      </SVideoIngredientContainer>
    </SRecipeContainer>)
}

