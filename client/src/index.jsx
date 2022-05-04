import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import Meals from './components/Meals.jsx';
import Recipe from './components/Recipe.jsx';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/meals' element={<Meals/>}/>
      <Route path='/recipe' element={<Recipe/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)