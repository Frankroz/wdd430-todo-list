import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    const nextTodo = { id: Date.now(), text: newItem, completed: false };
    setTodos([...todos, nextTodo]);
    setNewItem("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="app-wrapper">
      <div className="glass-card">
        <header>
          <h1>My Daily Tasks</h1>
          <p>{todos.filter((t) => !t.completed).length} tasks remaining</p>
        </header>

        <form onSubmit={addTodo} className="input-group">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit" className="add-btn">
            +
          </button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "todo-item done" : "todo-item"}
            >
              <div
                className="todo-content"
                onClick={() => toggleComplete(todo.id)}
              >
                <span className="checkbox"></span>
                <span className="text">{todo.text}</span>
              </div>
              <button className="del-btn" onClick={() => deleteTodo(todo.id)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
