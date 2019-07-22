import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
export const firebaseFirestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
export const signInWithGoogle = () => firebaseAuth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, otherData) => {
  if (userAuth) {
    const userReference = firebaseFirestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userReference.get();
    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userReference.set({
          displayName,
          email,
          createdAt,
          ...otherData
        });
      } catch (error) {
        console.error('Error in creating the user profile', error.message);
      }
    }
    return userReference;
  }
};

export default firebase;
