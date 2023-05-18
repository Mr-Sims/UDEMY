import { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
    const todoTextInput = useRef<HTMLInputElement>(null);
    const ctx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      const enteredText = todoTextInput.current!.value;

      if (enteredText.trim().length === 0) {
          // throw an error
        return;
      }

    ctx.addTodo(enteredText);
    todoTextInput.current!.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text: </label>
      <input type="text" id="text" ref={todoTextInput}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
