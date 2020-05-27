import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    { text: "Study ReactHook", isCompleted: false },
    { text: "Builds really cool todo App", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>I am Learning ReactHooks doing todoLists!</h2>
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
            <ToDO
              key={i}
              todo={todo}
              index={i}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

const ToDO = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};
