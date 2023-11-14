import React, { useState } from "react";
import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/AddTask/AddTask";

let tasks = ["Task1", "Task2", "Task3"];

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const addTask = (task) => {
    if (task !== "") setTaskList((prevList) => [...prevList, task]);
  };

  const deleteTask = (index) => {
    setTaskList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="main">
      <h2>Task Tracker App</h2>
      <div className="tasks">
        {taskList.map((task, ind) => {
          return (
            <Task task={task} deleteTask={deleteTask} ind={ind} key={ind} />
          );
        })}
      </div>
      <AddTask addTask={addTask} />
    </div>
  );
}

export default App;
