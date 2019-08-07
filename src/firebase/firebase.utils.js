import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJm-0lZ4nJ1btp3ildwEbZPBX652SazC8",
    authDomain: "crowndb-276b2.firebaseapp.com",
    databaseURL: "https://crowndb-276b2.firebaseio.com",
    projectId: "crowndb-276b2",
    storageBucket: "",
    messagingSenderId: "303470218425",
    appId: "1:303470218425:web:a69355612f179584"
  };
  

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;