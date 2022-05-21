import React from 'react';
import { FaLemon } from 'react-icons/fa';
import SHeader from '../styled/S-Header';

export default function Header() {
  return (
    <SHeader>
      <FaLemon />
      <button type="button">Sign in</button>
    </SHeader>
  );
}
