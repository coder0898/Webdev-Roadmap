import React, { Component } from 'react';

 class Counter extends Component {
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  

  render() {
    return (
      <div id='countDiv'>
        <h1>{this.props.value}</h1>
        <button id='inc' onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
        <button id='del' onClick={()=> this.props.onDelete(this.props.id)}>Delete</button>
        
      </div>
      
    )
  }
}

export default Counter;