import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  // Add Task
  const addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4() },
    ]);
    setNewTodo("");
  };

  const updateTaskValue = (event) => {
    setNewTodo(event.target.value);
  };

  // Delete Task
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2 className="title">Todo App</h2>

      <div className="input-area">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={updateTaskValue}
        />
        <button className="add-btn" onClick={addNewTask}>
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.task}</span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
