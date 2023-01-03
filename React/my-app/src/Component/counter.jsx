import React, { Component } from 'react';

 class Counter extends Component {
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  

  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
        <button onClick={()=> this.props.onDelete(this.props.id)}>Delete</button>
        
      </div>
      
    )
  }
}

export default Counter;