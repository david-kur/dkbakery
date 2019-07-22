import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBPw3tSOmquJK-UDs5ae_uY47usZotOBts',
  authDomain: 'dkbakery-db.firebaseapp.com',
  databaseURL: 'https://dkbakery-db.firebaseio.com',
  projectId: 'dkbakery-db',
  storageBucket: '',
  messagingSenderId: '637189091319',
  appId: '1:637189091319:web:b3b8c046d7f1e134'
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
export const signInWithGoogle = () => firebaseAuth.signInWithPopup(provider);

export default firebase;
