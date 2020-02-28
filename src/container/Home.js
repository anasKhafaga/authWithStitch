import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import {
  emailConfirmation,
  logoutCurrentUser,
  hasLoggedInUser
} from '../stitch/auth';

export default class Home extends Component {
  componentDidMount() {
    emailConfirmation();
  }
  logout = async () => {
    await logoutCurrentUser();
    this.props.history.replace('/login');
    console.log(this.props);
  };
  render() {
    let home;
    if (!hasLoggedInUser()) {
      if (this.props.location.pathname === '/signup') {
        home = (
          <Link to="login">
            <Button className="btn2">Login</Button>
          </Link>
        );
      } else if (this.props.location.pathname === '/login') {
        home = (
          <Link to="signup">
            <Button className="btn2">Signup</Button>
          </Link>
        );
      }
    } else {
      home = (
        <Link to="/">
          <Button className="btn2" onClick={this.logout}>
            Logout
          </Button>
        </Link>
      );
    }
    return <div className="Home">{home}</div>;
  }
}
