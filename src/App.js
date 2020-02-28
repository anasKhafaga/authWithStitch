import React from 'react';
import './App.css';
import Signup from './container/Signup';
import Login from './container/Login';
import Home from './container/Home';
import Users from './container/users';
import AddUser from './container/AddUser';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/add-user" component={AddUser} />
      <Route path="/update-user" component={AddUser} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
