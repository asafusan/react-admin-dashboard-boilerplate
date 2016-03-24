import React, { Component } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

export default class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: false
    }
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header onToggleSidebar={this.handleToggleSizeClicked.bind(this)}/>
        <Sidebar isCollapsed={this.state.sidebarCollapsed} toggleCollapse={this.handleToggleSizeClicked.bind(this)} list={sidebarList}/>
      </div>
    )
  }

  handleToggleSizeClicked() {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed
    })

  }
}


const sidebarList = [
  {
    text: 'First',
    icon: 'question',
    children: [
      {
        text: 'Sub-First',
        icon: '',
        children: [
          {
            text: 'Sub-Sub-First',
            icon: '',
            children: []
          },
          {
            text: 'Sub-Sub-First 2',
            icon: '',
            children: []
          }
        ]
      },
      {
        text: 'Sub-First 2',
        icon: '',
        children: []
      }
    ]
  },
  {
    text: 'Second',
    icon: 'anchor',
    children: [
      {
        text: 'Sub-Second',
        icon: '',
        children: []
      },
      {
        text: 'Sub-Second 2',
        icon: '',
        children: []
      }
    ]
  }
];