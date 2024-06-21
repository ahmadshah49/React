import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoslice";
import { RootState } from "../store";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          <button
            className="mx-8"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Remove todo {"    "}
          </button>
        </li>
      ))}
    </>
  );
};

export default Todos;
