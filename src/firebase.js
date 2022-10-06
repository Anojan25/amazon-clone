import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJH3SM2cCDE_uLQdLGrdr9UKpk14cMhsk',
  authDomain: 'clone-78361.firebaseapp.com',
  projectId: 'clone-78361',
  storageBucket: 'clone-78361.appspot.com',
  messagingSenderId: '154297665998',
  appId: '1:154297665998:web:e3e46b1dfd5fd02238439f',
  measurementId: 'G-RB9EV5MHZC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
