import React from 'react';
import MyModal from '../MyModal';

const TaskDisplay = ({ taskData, deleteTodo, handleDoubleClick }) => {
  return (
    <div className="std-box-component solid-border" onDoubleClick={handleDoubleClick}>
      <p className="text-defaultRegular">{taskData.task}</p>
      <button style={{ marginLeft: 8, marginRight: 4 }} onClick={() => deleteTodo(taskData.id)}>
        Delete
      </button>
      <MyModal taskData={taskData} />
    </div>
  );
};

export default TaskDisplay;
