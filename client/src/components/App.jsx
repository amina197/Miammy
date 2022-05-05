import React, {useState} from 'react';
import Areas from './Areas.jsx';
import Categories from './Categories.jsx';
import Favorites from './Favorites.jsx';
import {SHeader} from './../styled/S-Header.js';
import GlobalStyle from './../styled/globalStyles.js';
import {SAppContainer} from './../styled/S-App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite, faMartiniGlassCitrus, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function App() {


  return (<>
    <GlobalStyle/>
      <SHeader>
        <h1>Miammy</h1>
        <h2>Get food inspiration from around the world</h2>
      </SHeader>
      <h3 style={{margin: '3rem 0 1rem 15%'}}><FontAwesomeIcon bounce icon={faCookieBite} size="sm"/>  Your Favorite meals</h3>
      <SAppContainer>
        <Favorites />
      </SAppContainer>
      <h3 style={{margin: '3rem 0 1rem 15%'}}><FontAwesomeIcon icon={faMartiniGlassCitrus} size="sm" bounce/>  Where will your taste buds travel today?</h3>
      <SAppContainer>
        <Areas />
      </SAppContainer>
      <h3 style={{margin: '3rem 0 1rem 15%'}}><FontAwesomeIcon icon={faUtensils} size="sm" bounce/> Looking for a specific type of recipe?</h3>
      <SAppContainer>
        <Categories />
      </SAppContainer>
    </>
  )
}