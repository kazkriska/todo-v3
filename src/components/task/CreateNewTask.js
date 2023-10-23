import React, { useState } from 'react';
import NewTaskBtn from './NewTaskBtn';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';


const CreateNewTask = ({taskOptions: {addTodo}}) => {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState('');

  const handleClick = () => {
    setClicked((state) => !state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      const todo = {
        id: uuidv4(),
        task: input,
        dateCreated: new Date().toLocaleString(),
      };
      addTodo(todo);
      setInput('');
      setClicked((state) => !state);
    }
  };

  return (
    <div>
      {!clicked ? (
        <NewTaskBtn handleClick={handleClick} />
      ) : (
        <TaskForm
          inputValue={input}
          handleChange={(e) => setInput(e.target.value)}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default CreateNewTask;
