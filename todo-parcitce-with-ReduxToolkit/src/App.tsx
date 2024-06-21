import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  {
    console.log(import.meta.env.VITE_API_KEY);
  }
  return (
    <div>
      <h1>Todo App With Redux</h1>
      <AddTodo />
      <Todos />
    </div>
  );
};
export default App;
