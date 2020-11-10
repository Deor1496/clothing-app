import React from 'react'
import './signin-and-signup.styles.scss'
import SignIn from '../../components/sign-in/signIn.component' 
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () =>(
    <div>
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
        
    </div>
);

export default SignInAndSignUpPage