import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([]);

  const addTask = (taskName) => {
    if (taskName.trim()) {
      setTaskData((prev) => [
        ...prev,
        { id: uuidv4(), taskName: taskName, status: false }
      ]);
    }
  };

  const handleCheckboxChange = (id) => {
    setTaskData((prevData) =>
      prevData.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ taskData, addTask, handleCheckboxChange }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
