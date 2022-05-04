import React, {useState} from 'react';
import Areas from './Areas.jsx';
import Categories from './Categories.jsx';
import Favorites from './Favorites.jsx';
import Meals from './Meals.jsx';


export default function App() {

  const [meals, setMeals] = useState([])

  const displayMeals = (newMeals) => {
    setMeals(newMeals)
  }

  return (<>
    <Favorites displayMeals={displayMeals}/>
    <Areas displayMeals={displayMeals}/>
    <Categories displayMeals={displayMeals}/>
    <Meals meals={meals}/>
    </>
  )
}