import React, { Component } from 'react'
import { Icon, Menu, Sidebar, Item } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import "./style.css";

export default class SidebarExampleSidebar extends Component {
  state = { 
      // visible: true,
      animation: "push",
      marginIsVisible: {
        marginLeft: '170px'
      },
      margin: {
        marginLeft: '50px'
      },
    }

    handleItemClick = (e, { name }) => this.setState(prevState => (
        { 
            activeItem: name, 
        }))
    handleSidebar = (prevState) => {
        this.setState(prevState => ({size: !prevState.size}))
    }

  render() {
    const { activeItem } = this.state

    return (
      <div>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            className="sidebar-style"
            vertical
            visible={true}
            width="thin"
          >
              <Link to="/">
                  <Menu.Item
                  icon="home"
                  name='Home'
                  active={activeItem === 'home'}
                  content='Home'
                  onClick={this.handleItemClick}
                  />
              </Link>
              <Link to="/Contact">
                  <Menu.Item
                  icon="mail"
                  name='Contact'
                  active={activeItem === 'contact'}
                  content='Contact'
                  onClick={this.handleItemClick}
                  />
              </Link>
        </Sidebar>
      </div>
    )
  }
}
