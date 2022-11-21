import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore , doc , getDoc , setDoc} from 'firebase/firestore';

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
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth , additionalInformation) =>
    {
        if(!userAuth) return;
        const userDocRef = doc(db , 'users' , userAuth.uid);
        const userSnapshot = await getDoc(userDocRef)
        if(!userSnapshot.exists())
        {
            const {displayName , email} = userAuth;
            const createdAt = new Date();
            try{
                await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
            }
        
        catch(err) {
            console.error("Error Occured");
            console.error(err.message);
        }
    }
    return userDocRef
    };

export const creatAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;
    return await  createUserWithEmailAndPassword(auth, email, password);
}
   