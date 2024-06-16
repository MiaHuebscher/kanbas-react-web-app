import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
  return(
    <div>
      <h3>Redux Examples</h3>
      <br/>
      <HelloRedux />
      <CounterRedux />
      <AddRedux /><hr/>
      <TodoList />
    </div>
  );
};

