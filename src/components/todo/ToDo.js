import React from "react";
import styles from "./styles.css";
function ToDo({ toDo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: toDo.isCompleted ? "line-through" : "" }}
      className={styles.todo}
    >
      <div>
        <button onClick={() => removeTodo(index)}>Remove</button>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
      {toDo.text}
    </div>
  );
}

export default ToDo;
