import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  SMealsWrapper,
  SMealsContainer,
  SMealContainer,
  FullCard,
  FrontCard,
  BackCard,
} from '../styled/S-Meals';
import Header from './Header';
import SCarousel from '../styled/S-Carousel';

export default function Meals() {
  const location = useLocation();
  const navigate = useNavigate();
  const [research, setResearch] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (research && location.state) {
      const filtered = location.state.meals.filter((meal) => meal.strMeal
        .toLowerCase()
        .includes(research.toLowerCase()));
      setFilteredMeals(filtered);
    } else {
      setFilteredMeals(location.state.meals);
    }
    setFilter(location.state.filter);
  }, [research]);

  const mealClicked = (e) => {
    navigate('/recipe', { state: { mealId: e.target.attributes['data-key'].value } });
  };

  const favoriteClicked = (e) => {
    axios.post('/favorite/add', {
      params: {
        id: e.target.attributes['data-key'].value,
        title: e.target.attributes['data-title'].value,
        thumbnail: e.target.attributes['data-thumb'].value,
      },
    })
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  };

  const mealResearched = (e) => {
    setResearch(e.target.value);
  };

  const allMeals = filteredMeals.map((meal) => (
    <SMealContainer key={meal.idMeal} data-key={meal.idMeal}>
      <FullCard>
        <FrontCard img={`${meal.strMealThumb}/preview`} />
        <BackCard>
          <h1>{meal.strMeal}</h1>
          <button type="button" onClick={mealClicked} data-key={meal.idMeal}>Check recipe</button>
        </BackCard>
      </FullCard>
    </SMealContainer>
  ));

  return (
    <>
      <Header />
      <SCarousel>
        <h1>Meals</h1>
        <h2>{`-- ${filter} --`}</h2>
        <input type="text" id="research" placeholder="Filter your meals by name" onChange={mealResearched} />
      </SCarousel>
      <SMealsWrapper>
        <SMealsContainer>
          {allMeals}
        </SMealsContainer>
      </SMealsWrapper>
    </>
  );
}
