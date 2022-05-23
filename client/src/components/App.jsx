import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, showSignIn } from '../atoms';
import GlobalStyle from '../styled/globalStyles';
import Header from './Header';
import SignIn from './SignIn';
import { SLandingWrapper, SLandingSlider } from '../styled/S-Landing';

export default function App() {
  const [isLogged, setIsLogged] = useRecoilState(isLoggedIn);
  const [showModal, setShowModal] = useRecoilState(showSignIn);
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    if (isLogged) {
      navigate('/meals');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <SLandingWrapper>
        <Header />
        <SLandingSlider>
          <h1>Miammy</h1>
          <h2>Get recipes ideas from around the world</h2>
          <button type="button" onClick={handleDiscoverClick}>Discover</button>
        </SLandingSlider>
      </SLandingWrapper>
      <SignIn />
    </>
  );
}
