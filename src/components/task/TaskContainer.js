import React, { useState } from 'react';
import TaskDisplay from './TaskDisplay';
import TaskForm from './TaskForm';

const TaskContainer = ({ taskData, taskOptions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(taskData.task);

  const { deleteTodo, editTodo } = taskOptions;

  //handles editing existing task
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      editTodo(taskData.id, input);
      setIsEditing((state) => !state);
    }
  };

  return (
    <div>
      {isEditing ? (
        <TaskForm
          handleSubmit={handleSubmit}
          inputValue={input}
          handleChange={(e) => setInput(e.target.value)}
          formButtonText={'Submit'}
        />
      ) : (
        <TaskDisplay
          taskData={taskData}
          deleteTodo={deleteTodo}
          handleDoubleClick={() => setIsEditing((state) => !state)}
        />
      )}
    </div>
  );
};

export default TaskContainer;
