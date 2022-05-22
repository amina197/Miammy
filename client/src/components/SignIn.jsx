import React, { useState } from 'react';
import {
  createNewUser,
  userSignIn,
} from '../authentication';

export default function SignIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const getCredentials = (e) => {
    e.target.name === 'Email' ? setEmail(e.target.value) : setPassword(e.target.value);
  };

  const saveCredentials = () => {
    createNewUser(email, password);
    setEmail('');
    setPassword('');
  };

  const connectCredentials = () => {
    userSignIn(email, password);
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Email" name="Email" onChange={getCredentials} />
        <input type="password" placeholder="Password" name="Password" onChange={getCredentials} />
        <button type="button" onClick={saveCredentials}>Sign up</button>
      </form>
      <form>
        <input type="text" placeholder="Email" name="Email" onChange={getCredentials} />
        <input type="password" placeholder="Password" name="Password" onChange={getCredentials} />
        <button type="button" onClick={connectCredentials}>Sign in</button>
      </form>
    </>
  );
}
