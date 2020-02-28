import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import editSVG from '../assets/edit.svg';
import './Icon.css'
class Edit extends Component {
  edit = () => {
    const id = this.props.id
    return <Redirect to={{
      pathname:'/update-user',
      state: {id: id}
    }}/>
  }
  render() {
    return (
      <div className="icon">
        <i onClick={e => this.edit()}>
          <img src={editSVG} width="18px" />
        </i>
      </div>
    );
  }
}

export default Edit;
