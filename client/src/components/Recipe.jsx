import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SCarousel from '../styled/S-Carousel';
import {
  SRecipeWrapper,
  SRecipeContainer,
  SRecipeInstructionsHeaderContainer,
  SIngredientsList,
  SInstructionsContainer,
} from '../styled/S-Recipe';
import { ModalWrapper, ModalContainer } from '../styled/S-Modal';

export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [showIngredients, setShowIngredients] = useState(false);
  const [measures, setMeasures] = useState([]);
  const [splitInstructions, setSplitInstructions] = useState([]);
  const [youtube, setYoutube] = useState('');
  const [showYoutube, setShowYoutube] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { mealId } = location.state;
      if (mealId || mealId === 0) {
        axios.get(`/api/meals/recipe?id=${mealId}`)
          .then((({ data }) => {
            setRecipe(data);
          }))
          .catch((err) => console.error('Error client retrieveing meal recipe', err));
      }
    }
  }, [location.state]);

  useEffect(() => {
    const findIngredients = () => {
      const recipeInfos = Object.entries(recipe)
        .filter((info) => info[0].includes('strIngredient')
          && info[1])
        .map((ingredient) => ingredient[1]);

      setIngredients(recipeInfos);
    };

    const findMeasures = () => {
      const recipeInfos = Object.entries(recipe)
        .filter((info) => info[0].includes('strMeasure')
          && info[1])
        .map((ingredient) => ingredient[1]);

      setMeasures(recipeInfos);
    };

    if (recipe.strYoutube) {
      setYoutube(recipe.strYoutube.split('watch?v=')[1]);
    }

    findIngredients();
    findMeasures();

    if (recipe.strInstructions) {
      setSplitInstructions(recipe.strInstructions.split('\n').filter((step) => step !== '\r'));
    }
  }, [recipe]);

  const ingredientsMeasures = ingredients.map((ingredient, i) => (
    <li key={Math.random() * 1000}>
      {measures[i] && measures[i] !== ' ' ? `${ingredient} - ${measures[i]}` : ingredient }
    </li>
  ));

  const instructions = splitInstructions.map((step) => <p>{step}</p>);

  return (
    <>
      { showIngredients
        ? (
          <ModalWrapper onClick={() => setShowIngredients(false)}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <h6>Ingredients</h6>
              <SIngredientsList>{ingredientsMeasures}</SIngredientsList>
            </ModalContainer>
          </ModalWrapper>
        )
        : null }
      { showYoutube
        ? (
          <ModalWrapper onClick={() => setShowYoutube(false)}>
            <div onClick={(e) => e.stopPropagation()} style={{ width: '50%', height: '50%' }}>
              <iframe src={`https://www.youtube.com/embed/${youtube}`} style={{ width: '100%', height: '100%' }} allow="fullscreen" title="Youtube recipe video" />
            </div>
          </ModalWrapper>
        )
        : null }
      <Header />
      <SCarousel>
        <h1>Let's cook</h1>
        <h2>{recipe.strMeal}</h2>
        { youtube ? <button type="button" onClick={() => setShowYoutube(true)}>Watch tutorial</button> : null }
      </SCarousel>
      <SRecipeWrapper>
        <img alt={recipe.strMeal} src={recipe.strMealThumb} />
        <SRecipeContainer>
          <SRecipeInstructionsHeaderContainer>
            <h2>Instructions</h2>
            <button type="button" onClick={() => setShowIngredients(true)}>Check Ingredients list</button>
          </SRecipeInstructionsHeaderContainer>
          <SInstructionsContainer>
            {instructions}
          </SInstructionsContainer>
        </SRecipeContainer>
      </SRecipeWrapper>
    </>
  );
}
