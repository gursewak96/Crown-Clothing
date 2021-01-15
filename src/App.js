import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Homepage/Homepage.component"
import Shoppage from "./pages/Shoppage/Shoppage.component";
import Header from "./components/header/Header.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/SignInSignUp.component"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"


class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth)=>{

      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>console.log(this.state))
        })
      }
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
