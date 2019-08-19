import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import SignUp from './component/Signup';

class App extends React.Component {
  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}
}

export default App;
