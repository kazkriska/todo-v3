import React from 'react'
import TaskDisplay from './TaskDisplay'

const TaskContainer = ({ taskData, taskOptions: { deleteTodo } }) => {
  return (
    <div>
        <TaskDisplay taskData={taskData} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TaskContainer