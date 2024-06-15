import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1 className="text-center text-white text-5xl font-bold mt-10">
        Todo App With Redux
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
