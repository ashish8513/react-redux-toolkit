import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../slices/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-semibold mb-6">Todos</h2>
      <ul className="space-y-3 w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <span className="text-lg">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-200"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
