import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import { RootState, AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const todoState = useSelector((state: RootState) => state.todo);

  return (
    <div>
      <button onClick={() => dispatch(fetchTodos())}>fetchTodos</button>
      {todoState.isLoading && <p>Loading...</p>}
      {todoState.isError && <p>Error fetching todos.</p>}
      {todoState.data && (
        <ul>
          {todoState.data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
