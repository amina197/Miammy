import React, { useState } from 'react';
import { FaLemon } from 'react-icons/fa';
import { onAuthStateChanged } from 'firebase/auth';
import { logout, auth } from '../authentication';
import SHeader from '../styled/S-Header';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Detect Firebase authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <SHeader>
      <FaLemon />
      <button type="button" onClick={() => logout()}>{ isLoggedIn ? 'Log out' : 'Sign in'}</button>
    </SHeader>
  );
}
