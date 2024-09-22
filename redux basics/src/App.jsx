import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { decrement, increment, multiply } from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar  />
      <button onClick={()=>dispatch(decrement())}>-</button>
      currently count is {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>*</button>
    </>
  );
}

export default App;
