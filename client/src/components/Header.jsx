import React from 'react';
import { FaLemon } from 'react-icons/fa';
import { logout } from '../authentication';
import SHeader from '../styled/S-Header';

export default function Header() {
  return (
    <SHeader>
      <FaLemon />
      <button type="button" onClick={() => logout()}>Sign in</button>
    </SHeader>
  );
}
