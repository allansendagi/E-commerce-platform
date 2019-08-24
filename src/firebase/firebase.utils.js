import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJm-0lZ4nJ1btp3ildwEbZPBX652SazC8",
    authDomain: "crowndb-276b2.firebaseapp.com",
    databaseURL: "https://crowndb-276b2.firebaseio.com",
    projectId: "crowndb-276b2",
    storageBucket: "crowndb-276b2.appspot.com",
    messagingSenderId: "303470218425",
    appId: "1:303470218425:web:a69355612f179584"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    
    return userRef;
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;