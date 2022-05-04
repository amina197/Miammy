import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Recipe from './Recipe.jsx';
import {useNavigate} from 'react-router-dom';

export default function Favorites() {
  const [faves, setFaves] = useState([]);
  const [activeMeal, setActiveMeal] = useState(null);
  const navigate = useNavigate();

  const mealClicked = (e) => {
    navigate('/recipe', {state: {mealId: e.target.attributes['data-key'].value}});
  };

  useEffect(() => {
    axios.get('/favorites')
      .then(({data}) => setFaves(data))
      .catch(err => console.log(err))
  }, []);

  const allFavorites = faves.map(fave =>
    <div key={fave.idMeal} data-key={fave.idMeal} onClick={mealClicked}>
      <h1 data-key={fave.idMeal}>{fave.strMeal}</h1>
      <img src={fave.strMealThumb} alt={fave.strMeal} data-key={fave.idMeal}/>
      <button data-key={fave.idMeal}>Select</button>
    </div>
  )

  return(<>
    {allFavorites}
    <Recipe mealId={activeMeal}/>
  </>)
}