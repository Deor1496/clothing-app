import React from 'react';
import './App.css';
import  HomePage  from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import {auth, createUserProfileDocument} from  './firebase/firebase.utils'



class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount(){
    // esto es lo que le da persistencia a la autenticacion
    //este codigo se utiliza para capturar los datos del userauth y guardarlos en el estado de la aplicacion 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(Snapshot=>{
          this.setState({
            currentUser:{
              id:Snapshot.id,
              ...Snapshot.data()
            }
          })
          
        })
      }
      else{
        this.setState({currentUser:userAuth});
      
      }
      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
