import React, {useState, useEffect} from 'react';
import Recipe from './Recipe.jsx';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import {SMealsWrapper, SMealsContainer, SMealContainer, STitleContainer, SResearchMeal} from './../styled/S-Meals.js';
import {SHeader} from './../styled/S-Header.js';
import GlobalStyle from './../styled/globalStyles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Meals(meals) {
  const location = useLocation();
  const navigate = useNavigate();
  const [research, setResearch] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    if (research && location.state) {
      const filtered = location.state.meals.filter(meal =>
        meal.strMeal.toLowerCase().includes(research.toLowerCase())
      );
      setFilteredMeals(filtered);
    } else {
      setFilteredMeals(location.state.meals);
    }
  }, [research])

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

  const mealResearched = (e) => {
    setResearch(e.target.value);
  }

  const allMeals = filteredMeals.map(meal =>
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
    <SResearchMeal type="text" placeholder="Research a specific meal" onChange={mealResearched}/>
    <SMealsWrapper>
      {allMeals}
    </SMealsWrapper>
  </SMealsContainer>
  </>)
}