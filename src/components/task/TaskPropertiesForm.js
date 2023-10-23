import React from 'react';

const TaskPropertiesForm = () => {
  return (
    <div>
      <form>
        <fieldset>
        <input type="radio" id="today" value="today" name="taskCategory" />
        <label htmlFor="today">Today</label><br />
        <input type="radio" id="week" value="week" name="taskCategory" />
        <label htmlFor="week">Week</label><br />
        <input type="radio" id="month" value="month" name="taskCategory" />
        <label htmlFor="month">Month</label><br />
        <input type="radio" id="dumpster" value="dumpster" name="taskCategory" />
        <label htmlFor="dumpster">Dumpster</label>
        </fieldset>
      </form>
    </div>
  );
};

export default TaskPropertiesForm;
