import React,{useEffect}from 'react';
import {signInWithGooglePopup , createUserDocumentFromAuth , signInWithGoogleRedirect , auth} from './../../utils/firebase/firebase.utils'
import {getRedirectResult} from 'firebase/auth'
import { async } from '@firebase/util';

const SignIn = () => {

    useEffect( () =>
    {
        async function fetchData() {
        const response = await getRedirectResult(auth);
        if(response)
        {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
        }
        fetchData();
    }
    ,[]);

    const logGoogleUserPopup = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

return (
    <div>
        <h1>Sign in page</h1>
        <button onClick={signInWithGoogleRedirect}>Sign in</button>
    </div>
);
};

export default SignIn;