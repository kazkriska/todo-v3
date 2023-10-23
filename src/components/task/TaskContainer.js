import React from 'react'
import TaskDisplay from './TaskDisplay'

const TaskContainer = ({taskData, taskOptions}) => {
  return (
    <div>
        <TaskDisplay taskData={taskData} deleteTodo={taskOptions.deleteTodo} />
    </div>
  )
}

export default TaskContainer