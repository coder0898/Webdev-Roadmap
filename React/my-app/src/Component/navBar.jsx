import React, { Component } from 'react'

 class NavBar extends Component {
  render() {
    return (
      <div>Cart <span>{ this.props.totalCounters }</span></div>
    )
  }
}

export default NavBar;