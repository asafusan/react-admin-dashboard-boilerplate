require('./header.scss');
require('font-awesome/css/font-awesome.css');
import React, { Component, PropTypes } from 'react';
import DDL from '../dropdown-list/dropdown-list';

const options = ['yo', 'yeah'];

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-section">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/600px-Wikimedia-logo.png"/>
            <span>MY LOGO</span>
          </div>
          <i className="fa fa-fw fa-bars" onClick={() => {this.props.onToggleSidebar()}}/>
        </div>
        <div className="header-main">
          <DDL options={options} title="Asaf David" image="http://placebear.com/g/200/300" />
        </div>
      </div>
    )
  }
}
Header.PropTypes = {
  onToggleSidebar: PropTypes.func.isRequired
};
