import React , {useState} from 'react';
import {creatAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields , setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const handleChange = (event) => {
        const{name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword)
        {
            alert("passwords do not match");
            return;
        }

        try{
            const {user} = await creatAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user , {displayName});
            resetFormFields();
            alert("Created Successfully");
        }
        catch(err) {
            if(err.code === 'auth/email-already-in-use')
            {
                alert("Email already in use")
            }
            else{
            console.log(err)
            }
        }

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} minLength={5} maxLength={20}/>
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} minLength={5} maxLength={40}/>
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} minLength={6} maxLength={20}/>
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} minLength={6} maxLength={20}/>
                <button type="submit">"SignUp"</button>
            </form>
        </div>
)};

export default SignUpForm