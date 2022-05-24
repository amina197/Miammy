import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { FaLemon } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logout, auth } from '../authentication';
import { showSignIn, isLoggedIn } from '../atoms';
import SHeader from '../styled/S-Header';

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useRecoilState(showSignIn);
  const [isLogged, setIsLogged] = useRecoilState(isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) {
      setIsLogged(true);
    }

    if (!user) {
      setIsLogged(false);
    }
  }, [user, loading]);

  const handleLogClick = () => {
    if (isLogged) {
      logout();
    } else {
      setShowModal(true);
    }
  };

  const handleLogoClicked = () => {
    navigate('/');
  };

  return (
    <SHeader>
      <FaLemon onClick={handleLogoClicked} />
      <button type="button" onClick={handleLogClick}>{ isLogged ? 'Log out' : 'Sign in'}</button>
    </SHeader>
  );
}
