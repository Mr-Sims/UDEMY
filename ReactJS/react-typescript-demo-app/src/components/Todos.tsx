import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from './Todos.module.css';

const Todos: React.FC<React.PropsWithChildren> = (props) => {
  const context = useContext(TodosContext);


  return (
    <div className={classes.todos}>{props.children}
      

      <ul>
        {context.items.map(item => 
          <TodoItem 
            key={item.id} 
            text={item.text}
            id={item.id}
            />)

      }
      </ul>
    </div>
  );
};

export default Todos;
