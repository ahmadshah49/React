import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";
const AddTodo = () => {
  const [input, setInput] = useState("");

  const disPatch = useDispatch();

  const addTodoHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLFormElement>
  ) => {
    e.preventDefault();
    disPatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
