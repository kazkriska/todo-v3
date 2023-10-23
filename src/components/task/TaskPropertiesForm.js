import React from 'react'

// <TaskModal> will call this component
const TaskPropertiesForm = ({taskData}) => {
  return (
    <div>
        <form>
            <fieldset>
                <label htmlFor='taskCategory'>Category: </label>
                <select name='taskCategory' id='taskCategory' defaultValue={taskData.category}>
                    <option value='today'>Today</option>
                    <option value='week'>Week</option>
                    <option value='month'>Month</option>
                    <option value='dumpster'>Dumpster</option>
                </select>
            </fieldset>
        </form>
    </div>
  )
}

export default TaskPropertiesForm