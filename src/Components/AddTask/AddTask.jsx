import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ addTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleInput = (e) => {
    setNewTaskName(e.target.value);
  };

  return (
    <div className="add-task">
      <input
        type="text"
        onChange={handleInput}
        className="task-input"
        placeholder="Add New Task ..."
      />
      <button onClick={() => addTask(newTaskName)} className="add-btn">
        Add
      </button>
    </div>
  );
};

export default AddTask;
