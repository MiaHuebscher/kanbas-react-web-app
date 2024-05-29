import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div className="w-25" id="wd-add-redux">
      <h4>Add Redux</h4>
      <h5>{a} + {b} = {sum}</h5>
      <input type="number" value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control mb-2" />
      <input type="number" value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control mb-2" />
      <button className="btn btn-primary" id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}>
        Add Redux </button>
    </div>
  );
}

