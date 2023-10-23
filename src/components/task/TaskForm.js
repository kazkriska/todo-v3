import React from 'react';
import '../style.css'

const TaskForm = ({ handleSubmit, inputValue, handleChange }) => {
  return (
    <div>
      <div className="std-box-component solid-border">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTaskInput"
            id="newTaskInput"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type here..."
            autoFocus
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
