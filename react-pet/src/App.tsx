import { ReactNode, createElement, useState } from "react";
import "./App.css";
import ListItem from "./components/Todo/ListItem";

export default function App() {
  const [todoList, setTodoList] = useState<any>([]);
  const [itemForm, setItemForm] = useState({ tag: "", task: "" });

  function onInputChange(e: any) {
    const { name, value } = e.currentTarget;

    setItemForm((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  }
  return (
    <ul className="todo-list">
      <h1 className="listTitle">Task Manager</h1>
      {todoList.map((todo: any) => (
        <ListItem tag={todo.tag} task={todo.task} />
      ))}
      <li
        className="todo-wrapper"
        onClick={(e) => {
          setTodoList((prev: any) => [...prev, itemForm]);
          setItemForm(() => {
            return {
              tag: "",
              task: "",
            };
          });
        }}
      >
        <input
          className="input-tag"
          name="tag"
          value={itemForm.tag}
          type="text"
          onClick={(e) => e.stopPropagation()}
          onInput={onInputChange}
        />
        <input
          className="input-task"
          name="task"
          value={itemForm.task}
          type="text"
          onClick={(e) => e.stopPropagation()}
          onInput={onInputChange}
        />
      </li>
    </ul>
  );
}
