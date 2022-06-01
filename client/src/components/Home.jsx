import React from 'react';
import Header from './Header';
import Favorites from './Favorites';
import Areas from './Areas';
import Categories from './Categories';
import SCarousel from '../styled/S-Carousel';
import {
  SHomeBodyWrapper,
  HomeFavoritesWrapper,
  HomeFiltersWrapper,
} from '../styled/S-Home';
import Alert from './Alert';

function Home() {
  return (
    <>
      <Alert />
      <Header />
      <SCarousel>
        <h1>Be Inspired</h1>
        <h2>Discover new recipes</h2>
      </SCarousel>
      <SHomeBodyWrapper>
        <HomeFavoritesWrapper>
          <p>your favorite recipes</p>
          <Favorites />
        </HomeFavoritesWrapper>
        <HomeFiltersWrapper>
          <p>select a recipe by area or type</p>
          <form>
            <Areas />
            <Categories />
          </form>
        </HomeFiltersWrapper>
      </SHomeBodyWrapper>
    </>
  );
}

export default Home;
