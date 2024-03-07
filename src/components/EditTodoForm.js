import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, value }) => {
  const [task, setTask] = useState(value.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(task, value.id);
  };
  return (
    <form className="Todo_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Todo_input"
        value={task}
        placeholder="Update Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="Todo_btn">
        Update Task
      </button>
    </form>
  );
};
