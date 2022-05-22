import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  createNewUser,
  userSignIn,
} from '../authentication';
import { SignInWrapper, SignInContainer, SignInForm } from '../styled/S-SignIn';
import showSignIn from '../atoms';

export default function SignIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useRecoilState(showSignIn);

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
  };

  return (
    <>
      { showModal ? (
        <SignInWrapper onClick={() => setShowModal(false)}>
          <SignInContainer onClick={(e) => e.stopPropagation()}>
            <h6>Sign in</h6>
            <SignInForm>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="Email" onChange={getCredentials} />
              <label htmlFor="pwd">Password</label>
              <input type="password" id="pwd" name="Password" onChange={getCredentials} />
              <button type="button" onClick={connectCredentials}>Submit</button>
              <small>Don't have an account yet?</small>
            </SignInForm>
          </SignInContainer>
        </SignInWrapper>
      )
        : null }
      { null }
    </>
  );
}
