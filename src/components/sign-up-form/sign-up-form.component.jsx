import React , {useState} from 'react';
import {creatAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'

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
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} minLength={5} maxLength={20}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} minLength={5} maxLength={40}/>
                <FormInput label = "Password" type="password" required onChange={handleChange} name="password" value={password} minLength={6} maxLength={20}/>
                <FormInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} minLength={6} maxLength={20}/>
                <Button  type="submit">SignUp</Button>
            </form>
        </div>
)};

export default SignUpForm