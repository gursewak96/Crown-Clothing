import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Homepage.component"

const Hats = ()=>{
  return (
    <h1>Hats</h1>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}  />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
