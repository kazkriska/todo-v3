import Column from './components/Column';
import React, { useState } from 'react';
//import CreateNewTask from './components/task/CreateNewTask';
//import TaskContainer from './components/task/TaskContainer';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const taskOptions = {
    addTodo(todo) {
      setTodos([...todos, todo]);
    },
    deleteTodo(id) {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    editTodo(id, newTaskValue) {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.task = newTaskValue;
      }
    },
  };

  console.log(todos); //for testing, remove later
  return (
    <div className="kanban-board">
      <Column category={'today'} todos={todos} taskOptions={taskOptions} />
      <Column category={'week'} todos={todos} taskOptions={taskOptions} />
      <Column category={'month'} todos={todos} taskOptions={taskOptions} />
      <Column category={'dumpster'} todos={todos} taskOptions={taskOptions} />
    </div>
  );
}

export default App;