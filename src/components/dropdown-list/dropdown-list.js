require('./dropdown-list.scss');
require('font-awesome/css/font-awesome.css');
import React, { Component, PropTypes } from 'react';

export default class DDL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen ? this.props.isOpen : false
    }
  }

  render() {
    return (
      <div className="dropdown-list">
        <div className="select" onClick={this.handleSelectClicked.bind(this)}>
          {this.props.image &&
            <img src={this.props.image} style={{ width: '30px', height: '30px', borderRadius: '15px' }} />
          }
          <span>{this.props.title}</span>
          <i className={`fa fa-chevron-${this.state.isOpen ? 'up' : 'down'}`}/>
        </div>
        <div className={`options${this.state.isOpen ? ' show' : ''}`}>
          { this.props.options.map((option, index) => (
              <span key={index} onClick={this.props.onOptionClicked && this.props.onOptionClicked.bind(this, index)}>{option}</span>
            ))
          }

        </div>
      </div>
    )
  }

  handleSelectClicked() {
    this.setState({ isOpen: !this.state.isOpen });
  }
}
DDL.propTypes = {
  options: PropTypes.array.isRequired,
  onOptionClicked: PropTypes.func,
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};