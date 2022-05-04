import React, {useState} from 'react';
import Areas from './Areas.jsx';
import Categories from './Categories.jsx';
import Meals from './Meals.jsx';


export default function App() {

  const [meals, setMeals] = useState([])

  const displayMeals = (newMeals) => {
    setMeals(newMeals)
  }

  return (<>
    <Areas displayMeals={displayMeals}/>
    <Categories displayMeals={displayMeals}/>
    <Meals meals={meals}/>
    </>
  )
}