import React from 'react';

const TaskDisplay = ({ taskData, deleteTodo }) => {

  return (
    <div>
      <div className="std-box-component solid-border">
        <p className="text-defaultRegular">{taskData.task}</p>
        <button style={{ marginLeft: 8 }} onClick={() => deleteTodo(taskData.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskDisplay;
