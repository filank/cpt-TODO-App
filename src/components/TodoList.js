import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo, EditTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          EditTodo={EditTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
