import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodoContextProvider: React.FC<React.PropsWithChildren> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (text: string) => {
        console.log('text')
      const newTodo = new Todo(text);
      // setTodos(state => [...state, todo])
      setTodos(prevState => {
        return prevState.concat(newTodo);
      })
    }
  
    const removeTodoHandler = (id: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== id);
      });
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }; 


    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodoContextProvider;