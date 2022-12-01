import Header from './components/Header'
import Form from './components/Form'
import Todoitems from './components/Todoitems'
import {useState} from "react"

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Header />
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
      <Todoitems setTodoList={setTodoList}  todoList={todoList} />
    </div>
  );
}

export default App;
