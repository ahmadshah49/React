import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLFormElement>
  ) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter your Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit" className="mx-8">
        {" "}
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
