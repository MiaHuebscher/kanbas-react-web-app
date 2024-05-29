export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li className="list-group-item d-inline-flex">
        <input className="form-control w-27 me-5"
          value={todo.title}
          onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button className="btn btn-warning"
                onClick={() => updateTodo(todo)}
                id="wd-update-todo-click"> Update </button>&nbsp;
        <button className="btn btn-success"
                onClick={() => addTodo(todo)}
                id="wd-add-todo-click"> Add </button>
      </li>
    );
  }
  
  