import Column from './components/Column';
import React, { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const taskOptions = {
    findTodo(id) {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      return todoToUpdate;
    },
    addTodo(todo) {
      setTodos([...todos, todo]);
    },
    deleteTodo(id) {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    editTodoTask(id, newTaskValue) {
      const todoToUpdate = taskOptions.findTodo(id)
      if (todoToUpdate) {
        todoToUpdate.task = newTaskValue;
      }
    },
  };

  console.table(todos); //for testing, remove later
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