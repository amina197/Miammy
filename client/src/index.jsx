import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './components/App';
import Meals from './components/Meals';
import Recipe from './components/Recipe';

const container = document.getElementById('app');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  </BrowserRouter>,
);
