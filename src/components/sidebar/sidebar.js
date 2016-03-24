require('./sidebar.scss');
require('font-awesome/css/font-awesome.css');
import React, { Component, PropTypes } from 'react';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstActive: '',
      secondActive: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isCollapsed !== nextProps.isCollapsed) {
      this.setState({
        firstActive: '',
        secondActive: ''
      })
    }
  }

  render() {
    return (
      <div className={`sidebar ${this.props.isCollapsed && 'collapsed'}`}>
        <ul>
          { this.props.list && this.props.list.map((el, index) => (
            <ListItem
              key={index} data={el}
              open={this.state.firstActive === index}
              openChild={this.state.secondActive}
              onClick={() => {this.handleItemClicked(index)}}
              onSubItemClicked={(i) => {this.handleSubItemClicked(i)}}
            />
          ))
          }
        </ul>
      </div>
    )
  }

  handleItemClicked(index) {
    if (this.props.isCollapsed) {
      this.props.toggleCollapse();
    } else {
      this.setState({
        firstActive: index === this.state.firstActive ? '' : index,
        secondActive: ''
      });
    }
  }

  handleSubItemClicked(index) {
    this.setState({
      secondActive: index === this.state.secondActive ? '' : index
    });
  }
}
Sidebar.PropTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  toggleCollapse: PropTypes.func.isRequired
};

const ListItem = ({ data, open, openChild, onClick, onSubItemClicked }) => (
  <li>
    <span onClick={() => {onClick()}}>
      <span className="list-icon">
        {data.icon && <i className={`fa fa-${data.icon}`} />}
      </span>
      <span className="list-text">{data.text}</span>
      {data.children && data.children.length > 0 && <i className={`arrow fa fa-chevron-${open ? 'down' : 'right'}`} />}
    </span>

    {open && data.children && data.children.length > 0 &&
      <ul>
        {data.children.map((el, index) => (
          <ListItem key={index} data={el} open={openChild === index} onClick={() => {onSubItemClicked(index)}} />
        ))
        }
      </ul>
    }
  </li>
);