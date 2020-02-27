import React from 'react';
import './App.css';
import Signup from './container/Signup';
import Login from './container/Login';
import Home from './container/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Home />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
