import { atom } from 'recoil';

export const showSignIn = atom({
  key: 'showSignIn',
  default: false,
});

export const showBadAlert = atom({
  key: 'showBadAlert',
  default: false,
});

export const showGoodAlert = atom({
  key: 'showGoodAlert',
  default: false,
});

export const alertMessage = atom({
  key: 'alertMessage',
  default: '',
});

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: false,
});
