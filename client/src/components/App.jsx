import React from 'react';
import GlobalStyle from '../styled/globalStyles';
import Header from './Header';
import SignIn from './SignIn';
import { SLandingWrapper, SLandingSlider } from '../styled/S-Landing';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <SLandingWrapper>
        <Header />
        <SLandingSlider>
          <h1>Miammy</h1>
          <h2>Get recipes ideas from around the world</h2>
          <button type="button">Discover</button>
        </SLandingSlider>
      </SLandingWrapper>
      <SignIn />
    </>
  );
}
