import React from "react";

// import redux
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {};

  decrement = () => {};

  render() {
    return (
      <div>
        <h2> Counter </h2>
        <div>
          <button onClick={this.decrement}> - </button>
          <span> {this.props.count} </span>
          <button onClick={this.increment}> + </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// how props are received by the component

// It’s written this way because connect is a higher-order function, it returns a function when you call it. And then calling that function with a component returns a new (wrapped) component.
export default connect(mapStateToProps)(Counter);

// What connect does is hook into Redux, pull out the entire state, and pass it through the mapStateToProps function that you provide. This needs to be a custom function because only you will know the “shape” of the state in Redux.
