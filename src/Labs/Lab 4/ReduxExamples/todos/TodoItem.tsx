export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li key={todo.id} className="list-group-item">
        <strong className="fs-3">{todo.title}</strong>
        <button className="btn btn-danger float-end"
                onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"> Delete </button>
        <button className="btn btn-primary float-end me-2"
                onClick={() => setTodo(todo)}
                id="wd-set-todo-click"> Edit </button>
      </li>
    );
  }
  
  