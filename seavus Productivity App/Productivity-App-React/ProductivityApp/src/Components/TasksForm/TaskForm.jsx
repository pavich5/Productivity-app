import React from 'react';
import Button from '../Button/Button';

const TaskForm = ({
  handleFormSubmit,
  sectionName,
  handleSectionNameChange,
  taskName,
  handleTaskNameChange,
  subtasks,
  handleSubtaskChange,
  date,
  handleDateChange,
  setShowForm
}) => {
  return (
    <form onSubmit={handleFormSubmit} className="forma">
      <div className="form-group">
        <label htmlFor="sectionName">Section Name:</label>
        <input
          type="text"
          id="sectionName"
          value={sectionName}
          onChange={handleSectionNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={handleTaskNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Subtasks:</label>
        {subtasks.map((subtask, index) => (
          <input
            key={index}
            type="text"
            value={subtask}
            onChange={(e) => handleSubtaskChange(index, e)}
            required
          />
        ))}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="formButtons">
      <Button onBtnClick={()=> setShowForm(false)} btnText='Close'/>
      <Button btnText='Submit' type='submit'/>
      </div>
    </form>
  );
};

export default TaskForm;
