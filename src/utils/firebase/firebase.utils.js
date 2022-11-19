import {initializeApp} from 'firebase/app';
import {getAuth , signInWithPopup , signInWithRedirect , GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqZbZJdaiBIQc-H4FbyRLRhztFhbBXRyk",
    authDomain: "crown-clothing-ed62c.firebaseapp.com",
    projectId: "crown-clothing-ed62c",
    storageBucket: "crown-clothing-ed62c.appspot.com",
    messagingSenderId: "786220292300",
    appId: "1:786220292300:web:04a378888d44e043eb8a69"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);