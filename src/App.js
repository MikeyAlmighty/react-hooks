import React, { useState } from "react";
import "./App.css";
import ToDo from "./components/todo/ToDo";
import TodoForm from "./components/todoForm/TodoForm";

function App() {
  // todos state
  // setTodos Update State
  // useState init state
  const [todos, setTodos] = useState([
    {
      text: "Learn React Hooks",
      isCompleted: false
    },
    {
      text: "Watch Deadpool",
      isCompleted: false
    },
    {
      text: "Play Fallout",
      isCompleted: false
    }
  ]);

  const handleAddTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleRemoveTodo = index => {
    const toDos = [...todos].filter((todo, indx) => indx !== index);
    console.log(toDos);
    setTodos(toDos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((toDo, index) => (
          <ToDo
            key={index}
            index={index}
            toDo={toDo}
            completeTodo={completeTodo}
            removeTodo={handleRemoveTodo}
          />
        ))}
        <TodoForm addTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
