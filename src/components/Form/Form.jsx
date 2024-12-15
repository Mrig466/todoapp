import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import './Form.css';

const Form = () => {
  const { addTask } = useTasks();
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <div className="form-container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter task"
        className="input-task"
      />
      <button 
        onClick={handleAddTask} 
        className="add-task-button"
      >
        Add Task
      </button>
    </div>
  );
};

export default Form;
