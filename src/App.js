import Column from './components/Column';
import React, { useState } from 'react';
import CreateNewTask from './components/task/CreateNewTask';
import TaskContainer from './components/task/TaskContainer';
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
      <Column category={'today'} >
        {todos.map((todo) => (
          <TaskContainer
            taskData={todo}
            key={todo.id}
            taskOptions={taskOptions}
          />
        ))}
        <CreateNewTask taskOptions={taskOptions} />
      </Column>
      <Column category={'week'} >
      <CreateNewTask taskOptions={taskOptions} />
      </Column>
      <Column category={'month'} ></Column>
      <Column category={'dumpster'} >
      </Column>
    </div>
  );
}

export default App;
