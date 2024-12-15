import React from "react";
import { useTasks } from "../../context/TaskContext";
import './Task.css';

const Task = () => {
  const { taskData, handleCheckboxChange } = useTasks();

  const handleCheckbox = (id) => {
    handleCheckboxChange(id);
  };
  
  if (taskData.length === 0) {
    return (
      <div className="todo-container">
        <h2 className="todo-title">Tasks</h2>
        <p className="no-tasks-message">No tasks yet. Please add a task.</p>
      </div>
    );
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">Tasks</h2>
      <ul className="task-list">
        {taskData.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-info">
              <div className="task-id">ID: {task.id}</div>
              <div className="task-name">Task name: {task.taskName}</div>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={task.status === true}
                onChange={() => handleCheckbox(task.id)}
                className="checkbox"
              />
              <span className={`task-status ${task.status ? "completed" : "pending"}`}>
                {task.status ? "Completed" : "Pending"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
