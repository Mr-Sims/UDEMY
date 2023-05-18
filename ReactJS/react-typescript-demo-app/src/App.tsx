import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider from './store/todos-context';

function App() {

  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos ><h1>TODOS but like props.children</h1></Todos>
    </TodoContextProvider>
  );
}

export default App;
