import { atom } from 'recoil';

export const showSignIn = atom({
  key: 'showSignIn',
  default: false,
});

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: false,
});
