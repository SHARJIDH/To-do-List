import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ value, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(value.id)}
        className={`${value.completed ? "completed" : ""}`}
      >
        {value.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(value.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(value.id)} />
      </div>
    </div>
  );
};
