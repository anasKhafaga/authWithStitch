import React, { Component } from 'react';

import deleteSVG from '../assets/delete.svg';
import './Icon.css';
import { deleteUser } from '../stitch/userCRUD';

class Delete extends Component {
  delete = async (e) => {
    await deleteUser(this.props.id);
    console.log(this.props.parentUpdate())
  };

  render() {
    return (
      <div className="icon">
        <i
          onClick={e => this.delete(e)}
          onMouseEnter={() => {
            document.body.style.cursor = 'pointer';
          }}
          onMouseLeave={() => {
            document.body.style.cursor = 'default';
          }}
        >
          <img src={deleteSVG} width="18px" />
        </i>
      </div>
    );
  }
}

export default Delete;
