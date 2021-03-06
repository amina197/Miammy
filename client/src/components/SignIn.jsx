import { AuthErrorCodes } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { createNewUser, userSignIn } from '../authentication';
import {
  SignInForm,
  AccountContainer,
  CTA,
} from '../styled/S-SignIn';
import { ModalWrapper, ModalContainer } from '../styled/S-Modal';
import { showSignIn } from '../atoms';

export default function SignIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useRecoilState(showSignIn);
  const [modalView, setModalView] = useState('signin');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resetInfo = () => {
    setEmail('');
    setPassword('');
  };

  const resetError = () => {
    setShowError(false);
    setErrorMessage('');
  };

  useEffect(() => {
    resetInfo();
    resetError();
  }, [showModal, modalView]);

  const navigate = useNavigate();

  const getCredentials = (e) => {
    e.target.name === 'Email' ? setEmail(e.target.value) : setPassword(e.target.value);
  };

  const saveCredentials = () => {
    resetError();
    createNewUser(email, password)
      .then((credentials) => {
        console.log(credentials);
        localStorage.setItem('user', credentials.user.uid);
        resetInfo();
        navigate('/home');
        setShowModal(false);
      })
      .catch((err) => {
        const { code } = err;

        if (code === AuthErrorCodes.EMAIL_ALREADY_EXISTS
          || code === AuthErrorCodes.EMAIL_ALREADY_IN_USE) {
          setErrorMessage('Sorry, a user already exists with the provided email.');
        } else {
          setErrorMessage('Error.');
        }

        setShowError(true);
      });
    resetInfo();
  };

  const connectCredentials = () => {
    resetError('');
    userSignIn(email, password)
      .then((credentials) => {
        localStorage.setItem('user', credentials.user.uid);
        resetInfo();
        navigate('/home');
        setShowModal(false);
      })
      .catch((err) => {
        const { code } = err;

        if (code === AuthErrorCodes.INVALID_EMAIL) {
          setErrorMessage('Invalid email.');
        } else if (code === AuthErrorCodes.INVALID_PASSWORD) {
          setErrorMessage('Wrong password.');
        } else {
          setErrorMessage('Error.');
        }

        setShowError(true);
      });
  };

  return (
    <>
      { showModal ? (
        <ModalWrapper onClick={() => { setShowModal(false); }}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <h6>{ modalView === 'signin' ? 'Sign in' : 'Sign up'}</h6>
            <SignInForm>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="Email" onChange={getCredentials} />
              <label htmlFor="pwd">Password</label>
              <input type="password" id="pwd" name="Password" onChange={getCredentials} />
              { showError ? <p>{`${errorMessage} Please try again.`}</p> : null }
              { modalView === 'signin'
                ? (
                  <>
                    <CTA type="button" onClick={connectCredentials}>Connect</CTA>
                    <AccountContainer>
                      <small>Don&#39;t have an account yet?</small>
                      <button type="button" onClick={() => setModalView('signup')}>Sign Up</button>
                    </AccountContainer>
                  </>
                )
                : (
                  <>
                    <CTA type="button" onClick={saveCredentials}>Create account</CTA>
                    <AccountContainer>
                      <small>Already have an account?</small>
                      <button type="button" onClick={() => setModalView('signin')}>Sign in</button>
                    </AccountContainer>
                  </>
                )}
            </SignInForm>
          </ModalContainer>
        </ModalWrapper>
      )
        : null }
      { null }
    </>
  );
}
