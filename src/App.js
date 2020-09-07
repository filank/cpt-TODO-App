import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      text: " something ",
      id: 1,
      isCompleted: false,
    },
    {
      text: " something ",
      id: 2,
      isCompleted: false,
    },
    {
      text: " something ",
      id: 3,
      isCompleted: false,
    },
  ]);

  const addTodo = (newTodo) => {
    newTodo.text.trim()
      ? setTodos([...todos, newTodo])
      : alert("write something");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const EditTodo = (id, editedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          EditTodo={EditTodo}
        />
        {/* <EditModal EditTodo={EditTodo} /> */}
      </header>
    </div>
  );
}

export default App;
