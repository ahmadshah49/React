import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeTodo } from "../feature/todoSlice";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="mx-8"
          >
            Remove Todo
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
