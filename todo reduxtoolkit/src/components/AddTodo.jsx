import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  
  const addTodoHandler = (e) => {
    e.preventDefault(); // Corrected 'prevnet' to 'prevent'
    dispatch(addTodo(input));
    setInput(""); // Clear the input field after dispatch
  };

  return (
    <div className="flex justify-center mt-12">
      <form onSubmit={addTodoHandler} className="flex items-center space-x-3">
        <input
          className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
