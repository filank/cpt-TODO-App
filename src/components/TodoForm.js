import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");
  const add = (e) => {
    e.preventDefault();
    addTodo({ id: Math.random(), text: inputText });
    setInputText("");
  };
  return (
    <div>
      <form style={{ marginBottom: 30 }}>
        <input
          style={{
            borderTopLeftRadius: "0.25rem",
            borderBottomLeftRadius: "0.25rem",
            border: 0,
            color: "#282c34",
            outline: "none",
          }}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={add}
          style={{
            borderTopRightRadius: "0.25rem",
            borderBottomRightRadius: "0.25rem",

            marginLeft: 6,
            color: "#282c34",
            borderColor: "white",
            border: "1px solid transparent",
          }}
        >
          {" "}
          Add{" "}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
