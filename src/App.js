import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment } from "./redux/slices/counterSlices";
// import { decrement, increaseByAmount, increment } from "./redux/slices/counterSlicesUsingActionsAndReducers";

function App() {
  const dispatch = useDispatch();

  const state = useSelector(state => state?.counter);
  const incrementedValue = 5;

  return (
    <div className="App">
      <h1>Redux toolkit Couter App</h1>
      <h2>Counter Value: {state?.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseByAmount(incrementedValue))}>Increment By {incrementedValue}</button>
    </div>
  );
}

export default App;
