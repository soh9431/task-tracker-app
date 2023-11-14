import React, { useState } from "react";
import "./Task.css";
import { Switch } from "@mui/material";

const Task = ({ task, deleteTask, ind }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [completeState, setCompleteState] = useState("Complete");

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    setCompleteState((prevState) => !prevState);
  };

  return (
    <div className="task-container">
      <span>{task}</span>
      <div className="controls">
        <div className="complete-state">
          <Switch checked={isChecked} onChange={handleChange} />
          <span>{completeState ? "Incomplete" : "Complete"}</span>
        </div>
        <span className="delete-icon" onClick={() => deleteTask(ind)}>
          <i class="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
};

export default Task;
