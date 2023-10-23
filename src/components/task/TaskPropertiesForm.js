import React, { useState } from 'react';

// <TaskModal> will call this component
const TaskPropertiesForm = ({ taskData, taskOptions, closeOnSubmit }) => {
    const [selectedCategory, setSelectedCategory] = useState(taskData.category)
    const {editTodoCategory} = taskOptions
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodoCategory(taskData.id, selectedCategory)
        closeOnSubmit()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <fieldset>
          <label htmlFor="taskCategory">Category: </label>
          <select
            name="taskCategory"
            id="taskCategory"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="dumpster">Dumpster</option>
          </select>
        </fieldset>
        <br />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default TaskPropertiesForm;
