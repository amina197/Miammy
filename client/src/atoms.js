import { atom } from 'recoil';

const isUserLoggedIn = atom({
  key: 'isUserLoggedIn',
  default: false,
});

export default isUserLoggedIn;
