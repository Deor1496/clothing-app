import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './signIn.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.prevenDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            

            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            

            <form onSubmit={this.handleSubmit}>
                <FormInput
                type="email"
                name="email"
                value={this.state.email}
                label="email"
                required
                handleChange={this.handleChange}
                />
              
                <FormInput
                type="password"
                name="password"
                value={this.state.password}
                label="password"
                required
                handleChange={this.handleChange}
                />
               
                <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with google
                    </CustomButton>
                </div>
                
            </form>
            </div>
        
        )
        
    }
}

export default SignIn