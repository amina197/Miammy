import React from 'react';
import GlobalStyle from '../styled/globalStyles';
import Landing from './Landing';
import SignIn from './SignIn';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Landing />
      <SignIn />
    </>
  );
}
