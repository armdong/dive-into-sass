import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <header id="header">
        <nav id="main-menu">
          <ul>
            <li><NavLink to="/" exact={true} activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="active">Protfolio</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Get in Touch</NavLink></li>
          </ul>
        </nav>
        <img id="logo"/>
      </header>
    )
  }
}

export default Header