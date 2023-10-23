import React from 'react';

const TaskPropertiesForm = () => {
  return (
    <div>
      <form>
        <fieldset>
        <input type="radio" id="today" value="today" name="taskCategory" />
        <label for="today">Today</label><br />
        <input type="radio" id="week" value="week" name="taskCategory" />
        <label for="week">Week</label><br />
        <input type="radio" id="month" value="month" name="taskCategory" />
        <label for="month">Month</label><br />
        <input type="radio" id="dumpster" value="dumpster" name="taskCategory" />
        <label for="dumpster">Dumpster</label>
        </fieldset>
      </form>
    </div>
  );
};

export default TaskPropertiesForm;
