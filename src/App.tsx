import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border-purple-300 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500  text-xl font-semibold"
        >
          Increment By 5
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500  text-xl font-semibold"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
