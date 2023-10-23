import Column from './components/Column';
import React, { useState } from 'react';
import CreateNewTask from './components/task/CreateNewTask';
import TaskContainer from './components/task/TaskContainer';

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
  };

  console.log(todos); //for testing, remove later
  return (
    <Column>
      {todos.map((todo) => (
        <TaskContainer
          taskData={todo}
          key={todo.id}
          taskOptions={taskOptions}
        />
      ))}
      <CreateNewTask taskOptions={taskOptions} />
    </Column>
  );
}

export default App;
