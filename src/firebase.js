import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2xTj8jd_sXpd9WJNt_ZeCjUKCSP9h7FU",
  authDomain: "linkedin-clone-aaf95.firebaseapp.com",
  projectId: "linkedin-clone-aaf95",
  storageBucket: "linkedin-clone-aaf95.appspot.com",
  messagingSenderId: "106062055952",
  appId: "1:106062055952:web:0d4b5cedebf6c313505895"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };