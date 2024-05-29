import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item d-inline-flex">
        <input className="form-control w-27 me-5"
          value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button className="btn btn-warning"
                onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"> Update </button>&nbsp;
        <button className="btn btn-success"
                onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </button>
      </li>
    );
  }
  
  