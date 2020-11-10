import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './signIn.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    // Este es el estado de el componente

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    // esto es lo que se encarga de limpiar los campos en lo que se "ENVIA" el formulario
    handleSubmit = event =>{
        event.prevenDefault();
        this.setState({email:'', password:''})
    }
    // esto es lo que se encarga de cambiar el estado en lo que se prduzc un cambiio en los input
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