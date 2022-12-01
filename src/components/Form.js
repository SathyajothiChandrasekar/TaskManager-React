import { v4 as uuidv4 } from 'uuid';
import style from '../style.module.css'

const Form = ({todo, setTodo, todoList, setTodoList}) =>{
    const handlechange = (event) =>{
       setTodo(event.target.value)
    }
    const handlesubmit = (event) =>{
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id:uuidv4()}])
        console.log(todoList);
        setTodo("")
    }
    return(
        <div className={style.formcontainer}>

            <form onSubmit={handlesubmit}>
                <input value={todo} 
                onChange={handlechange} 
                className={style.todoinput} 
                placeholder='ADD YOUR TO-DO ITEMS'></input>
                <button type="submit" 
                className={style.todobutton} >ADD</button>

            </form>
        </div>
    )
}
export default Form;