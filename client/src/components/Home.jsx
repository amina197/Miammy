import React from 'react';
import Header from './Header';
import Favorites from './Favorites';
import { SCarousel, SHomeBodyWrapper, HomeFavoritesWrapper } from '../styled/S-Home';

function Home() {
  return (
    <>
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
        <div>
          <p>filter recipes by</p>
          <form>
            <select name="country">
            </select>
          </form>
        </div>
      </SHomeBodyWrapper>
    </>
  );
}

export default Home;
