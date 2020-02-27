import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import { emailConfirmation, logoutCurrentUser } from '../stitch/auth';

export default class Home extends Component {
  componentDidMount() {
    emailConfirmation();
  }
  logout = () => {
    logoutCurrentUser();
  }
  render() {
    return (
      <div className="Home">
        <Link to="login">
          <Button className="btn2">Login</Button>
        </Link>

        <Link to="signup">
          <Button className="btn2">Signup</Button>
        </Link>

        <Link to="/">
          <Button className="btn2" onClick={this.logout}>
            Logout
          </Button>
        </Link>
      </div>
    );
  }
}
