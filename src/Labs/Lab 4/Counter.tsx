import React, { useState } from "react";
export default function Counter() {
  let countConsole = 7;
  console.log(countConsole);
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
        <div id="wd-counter">
            <h3>This Doesn't Change the DOM (only affects the console)</h3>
            <h4>Counter: {countConsole}</h4>
            <button className="btn btn-success"
                onClick={() => { countConsole++; console.log(countConsole); }}
                id="wd-counter-up-click">
                Up
            </button>&nbsp;
            <button className="btn btn-danger"
                onClick={() => { countConsole--; console.log(countConsole); }}
                id="wd-counter-down-click">
                Down
            </button>
            <hr/>
        </div>
        <div id="wd-counter-use-state">
            <h3>This Does Change the DOM because we Declare our 'Counter' variable as a State Variable</h3>
            <h4>Counter: {count}</h4>
            <button className="btn btn-success"
              onClick={() => setCount(count + 1)}
              id="wd-counter-up-click">Up</button>&nbsp;
            <button className="btn btn-danger"
              onClick={() => setCount(count - 1)}
              id="wd-counter-down-click">Down</button>
            <hr/>
        </div>
    </div>

  );
}
