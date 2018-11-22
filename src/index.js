import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log(state);
  // just gonna leave this blank for now
  // which is the same as `return undefined;`

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };
    //   Redux can (will) call your reducer with actions that it doesn’t know what to do with. In fact, the very first action you’ll receive is { type: "@@redux/INIT" }

    // so a default state is needed
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
