import React, { Component } from 'react';
import './AddUser.css';
import { FormGroup, FormLabel, Button, FormControl } from 'react-bootstrap';
import { addUser } from '../stitch/userCRUD';
import { hasLoggedInUser } from '../stitch/auth';

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', position: '' };
  }
  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.age.length > 0 &&
      this.state.position.length > 0
    );
  };

  handleSubmit = async event => {
    event.preventDefault();
    await addUser(this.state.name, this.state.age, this.state.position);
    return this.props.history.replace('/users');
  };
  componentDidMount() {
    if (!hasLoggedInUser()) {
      return this.props.history.replace('/login');
    }
  }
  render() {
    return (
      <div className="adduser">
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="age">
              <FormLabel>Age</FormLabel>
              <FormControl
                type="text"
                value={this.state.age}
                onChange={e => this.setState({ age: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="position">
              <FormLabel>Position</FormLabel>
              <FormControl
                type="text"
                value={this.state.position}
                onChange={e => this.setState({ position: e.target.value })}
              />
            </FormGroup>
            <Button block disabled={!this.validateForm()} type="submit">
              Add User
            </Button>
            <br/>
            <Button onClick={e => this.props.history.replace('/users')}>
              Users
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
