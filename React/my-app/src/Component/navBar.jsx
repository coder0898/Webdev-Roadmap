import React, { Component } from 'react'

 class NavBar extends Component {
  render() {
    return (
      <nav>Cart <span>{ this.props.totalCounters }</span></nav>
    )
  }
}

export default NavBar;