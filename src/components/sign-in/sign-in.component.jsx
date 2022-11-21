import React from 'react';
import {signInWithGooglePopup , createUserDocumentFromAuth} from './../../utils/firebase/firebase.utils'
import SignUpForm from '../sign-up-form/sign-up-form.component'

const SignIn = () => {

    const logGoogleUserPopup = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

return (
    <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUserPopup}>Sign in</button>
        <SignUpForm/>
    </div>
);
};

export default SignIn;