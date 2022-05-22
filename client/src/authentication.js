import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmy1zFW0gpb39T7jNSDqeSz8YNvpj6vis',
  authDomain: 'miammy.firebaseapp.com',
  projectId: 'miammy',
  storageBucket: 'miammy.appspot.com',
  messagingSenderId: '271595903182',
  appId: '1:271595903182:web:4d16503a6b51ab0189d89f',
  measurementId: 'G-YFF00Q8FRS',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

// On Sign up, create new user in Firebase
export const createNewUser = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  .then((userCredential) => {
    console.log('created', userCredential);
  })
  .catch((err) => {
    const { code, message } = err;
    console.error(code);
    console.error(message);
  });

// Detect authentication state
export const isLoggedIn = onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('logged in!');
  } else {
    console.log('No user!');
  }
});

export const logout = () => signOut(auth);

// const analytics = getAnalytics(firebaseApp);
