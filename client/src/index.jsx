import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import GlobalStyle from './styled/globalStyles';
import App from './components/App';
import Home from './components/Home';
import Meals from './components/Meals';
import Recipe from './components/Recipe';

const container = document.getElementById('app');

const root = createRoot(container);

root.render(
  <RecoilRoot>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
);
