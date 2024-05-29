import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
export default function CounterRedux() {
  const { count } = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h4>Counter Redux</h4>
      <h5>{count}</h5>
      <button className="btn btn-success"
              onClick={() => dispatch(increment())}
              id="wd-counter-redux-increment-click"> Increment </button>&nbsp;
      <button className="btn btn-danger"
              onClick={() => dispatch(decrement())}
              id="wd-counter-redux-decrement-click"> Decrement </button>
      <hr/>
    </div>
  );
}

