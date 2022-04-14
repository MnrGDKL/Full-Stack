import React, { useState } from "react";

const TodoInput = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  
  return (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add Todo"
            value={text}
          />
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
  );
};

export default TodoInput;
