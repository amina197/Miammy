import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './components/App';
import Meals from './components/Meals';
import Recipe from './components/Recipe';

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
