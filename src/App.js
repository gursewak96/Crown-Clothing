import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Homepage/Homepage.component"
import Shoppage from "./pages/Shoppage/Shoppage.component";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}  />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
