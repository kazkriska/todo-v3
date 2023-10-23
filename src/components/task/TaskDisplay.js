import React from 'react';

const TaskDisplay = ({ taskData, deleteTodo, handleDoubleClick }) => {
  return (
    <div className="std-box-component solid-border" onDoubleClick={handleDoubleClick}>
      <p className="text-defaultRegular">{taskData.task}</p>
      <button style={{ marginLeft: 8 }} onClick={() => deleteTodo(taskData.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskDisplay;
