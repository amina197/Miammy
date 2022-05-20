import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faMartiniGlassCitrus, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Areas from './Areas';
import Categories from './Categories';
import Favorites from './Favorites';
import GlobalStyle from '../styled/globalStyles';
import SHeader from '../styled/S-Header';
import SAppContainer from '../styled/S-App';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <SHeader>
        <h1>Miammy</h1>
        <h2>Get recipes ideas from around the world</h2>
      </SHeader>
      <h3 style={{ margin: '3rem 0 1rem 15%' }}>
        <FontAwesomeIcon bounce icon={faCookieBite} size="sm" />
        Your Favorite recipes
      </h3>
      <SAppContainer>
        <Favorites />
      </SAppContainer>
      <h3 style={{ margin: '3rem 0 1rem 15%' }}>
        <FontAwesomeIcon icon={faMartiniGlassCitrus} size="sm" bounce />
        Where will your taste buds travel today?
      </h3>
      <SAppContainer>
        <Areas />
      </SAppContainer>
      <h3 style={{ margin: '3rem 0 1rem 15%' }}>
        <FontAwesomeIcon icon={faUtensils} size="sm" bounce />
        Looking for a specific type of recipe?
      </h3>
      <SAppContainer>
        <Categories />
      </SAppContainer>
    </>
  );
}
