import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {

  render() {
    return (
      <>
        <button id="reset" onClick={this.props.onReset} >Reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            value={counter.value}
            id={counter.id}
            counter={counter}
          />
        ))}
      </>
    );
  }
}
