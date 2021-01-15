import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Homepage/Homepage.component"
import Shoppage from "./pages/Shoppage/Shoppage.component";
import Header from "./components/header/Header.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/SignInSignUp.component"
import {auth} from "./firebase/firebase.utils"


class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=>{
      this.setState({
        currentUser: user
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
