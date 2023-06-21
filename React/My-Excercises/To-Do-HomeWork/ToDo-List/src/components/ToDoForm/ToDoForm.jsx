import React, { useState } from 'react';
import './ToDoForm.css';
import Button from '../Button/Button';
import Task from '../Task/Task';

function ToDoForm() {
  const [taskValue, setTaskValue] = useState('');
  const [displayValues, setDisplayValues] = useState([]);

  const handleInputChange = (e) => {
    setTaskValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (taskValue.trim() !== '') {
      setDisplayValues([...displayValues, taskValue]);
      setTaskValue('');
    }
  };

  const handleTaskRemove = (index) => {
    const updatedValues = displayValues.filter((_, i) => i !== index);
    setDisplayValues(updatedValues);
  };

  const handleTaskUpdate = (index, updatedText) => {
    const updatedValues = [...displayValues];
    updatedValues[index] = updatedText;
    setDisplayValues(updatedValues);
  };

  return (
    <div className="ToDoForm">
      <input type="text" value={taskValue} onChange={handleInputChange} />
      <Button onClick={handleButtonClick} btnText="Add Task" />
      <ul>
        {displayValues.map((inputText, index) => (
          <Task
            key={index}
            index={index}
            inputText={inputText}
            removeTask={handleTaskRemove}
            updateTask={handleTaskUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoForm;
