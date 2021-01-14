import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Homepage/Homepage.component"
import Shoppage from "./pages/Shoppage/Shoppage.component";
import Header from "./components/header/Header.component";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}  />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
