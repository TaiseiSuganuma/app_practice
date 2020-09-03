import React from "react";
import { useDispatch } from "react-redux";
import counterSlice from "src/ducks/counter/slice";
import { useCounterState } from "src/ducks/counter/selectors";

const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };

  return (
    <>
      <button type="button" onClick={onClickIncrement}>
        ふやす
      </button>
      <button type="button" onClick={onClickDecrement}>
        へらす
      </button>
      <p>ねこが{state.count} 匹いる</p>
    </>
  );
};

export default CounterPage;
