import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './users.css';
import { fetchUsers } from '../stitch/userCRUD';
import { hasLoggedInUser } from '../stitch/auth';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import {Button} from 'react-bootstrap'

export default class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: null,
      del: false
    };
  }
  fetchAll = async () => {
    let tableRows;
    const users = await fetchUsers();
    if (!users) {
      return (tableRows = null);
    }
    tableRows = users.map(user => {
      const tableRow = (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.position}</td>
          <td>
            <Edit id={user._id} redirect= {()=> this.props.history.replace('/update-user')} />
          </td>
          <td>
            <Delete id={user._id} parentUpdate={()=> this.setState({del: true})} />
          </td>
        </tr>
      );
      return tableRow;
    });
    return tableRows;
  };
  async componentDidMount() {
     if (!hasLoggedInUser()) {
       return this.props.history.replace('/login');
     }
    const tableBody = await this.fetchAll();
    this.setState({ table: tableBody });
  }

  render() {
    return (
      <div className="users">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Job </th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.state.table}</tbody>
        </Table>
        <br />
        <Button onClick={e=> this.props.history.replace('/add-user')}>
          Add User
        </Button>
      </div>
    );
  }
}
