import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FirstPage from './components/Pages';
import './App.css';
import  HomePage from './components/Pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={FirstPage} exact />
        <Route path='/home' component={HomePage} exact />
      </Switch>
    </Router>
  );
};


export default App;

