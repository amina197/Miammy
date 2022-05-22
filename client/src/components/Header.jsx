import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { FaLemon } from 'react-icons/fa';
import { onAuthStateChanged } from 'firebase/auth';
import { logout, auth } from '../authentication';
import showSignIn from '../atoms';
import SHeader from '../styled/S-Header';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useRecoilState(showSignIn);
  // Detect Firebase authentication state
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // });

  return (
    <SHeader>
      <FaLemon />
      <button type="button" onClick={() => setShowModal(true)}>{ isLoggedIn ? 'Log out' : 'Sign in'}</button>
    </SHeader>
  );
}
