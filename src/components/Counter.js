//src/components/Counter.js
import React from "react";
import { connect } from "react-redux";

const Counter = ({ counter, multilpyCounter, increment, decrement, double, half }) => {
  return (
    <div>
      <p className="counter_title">Counter: {counter}</p>
      <button className="button" style={{margin: "5px"}} onClick={increment}>
        Increment
      </button>
      <button className="button" style={{margin: "5px"}} onClick={decrement}>
        Decrement
      </button>
      {/*  */}
      <p className="counter_title">Multiply counter: {multilpyCounter}</p>
      <button className="button" style={{margin: "5px"}} onClick={double}>
        Double
      </button>
      <button className="button" style={{margin: "5px"}} onClick={half}>
        Half
      </button>
    </div>
  );
};

// Cap nhat thuoc tinh dua vao state moi
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  multilpyCounter: state.multiplyCounter.multiplyCounter,
});

// Dinh nghia cac su kien dispatch (gui) cac action vao store
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  double: () => dispatch({ type: "DOUBLE" }),
  half: () => dispatch({ type: "HALF" })
});

// Cac components connect vao store se duoc thong bao khi co state moi va re-render
export default connect(mapStateToProps, mapDispatchToProps)(Counter);