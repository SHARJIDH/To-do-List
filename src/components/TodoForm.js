import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };
  return (
    <form className="Todo_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Todo_input"
        value={task}
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="Todo_btn">
        Add Task
      </button>
    </form>
  );
};
