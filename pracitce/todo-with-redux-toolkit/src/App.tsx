import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./components/todo";
import { AppDispatch, RootState } from "./store";

function App() {
  // const dispatch: AppDispatch = useDispatch();
  // const state = useSelector((state: RootState) => state);

  // console.log(state);
  // if (state.todo.isLoading) {
  //   return <div>Loading</div>;
  // }
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  console.log(state.todo.data);

  return (
    <div>
      <h1 className="text-center text-white text-5xl font-bold mt-10">
        Todo App With Redux
      </h1>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data &&
        state.todo.data.map((e, i) => <li key={i}>{e.title}</li>)}
    </div>
  );
}

export default App;
