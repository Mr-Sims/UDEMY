import React, {useContext} from "react";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

const TodoItem: React.FC<{ text: string; id: string}> = (props) => {
  const ctx = useContext(TodosContext);
  // const removeTodoHandler = () => {
  //   props.onremoveTodo(props.id);
  // }
  return <li className={classes.item} onClick={ctx.removeTodo.bind(null, props.id)}>{props.text}</li>;
};

export default TodoItem;
