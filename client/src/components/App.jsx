import React, {useState} from 'react';
import Areas from './Areas.jsx';
import Categories from './Categories.jsx';
import Favorites from './Favorites.jsx';

export default function App() {


  return (<>
      <Favorites displayMeals={displayMeals}/>
      <Areas displayMeals={displayMeals}/>
      <Categories displayMeals={displayMeals}/>
    </>
  )
}