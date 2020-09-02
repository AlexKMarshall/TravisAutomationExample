import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuestion } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const newTodo = (name) => ({
    id: Date.now(),
    name,
    isCompleted: false,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    const todo = newTodo(inputValue);
    setTodos((oldTodos) => [todo, ...oldTodos]);
    setInputValue("");
  };

  return (
    <div className="container">
      <h1>My Awesome Todo List</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-input">Add a task:</label>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.name}</div>
            <div>
              {todo.isCompleted ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faQuestion} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
