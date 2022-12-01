import style from '../style.module.css'

const Todo = ({items, todoList, setTodoList}) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter((item) =>item.id !== items.id))
    }
    return (
        <div>
            <div className={style.todoitems}>
                <h3 className={style.todoname}>{items.name}</h3>
                <button onClick={deleteTodo} className={style.deletebutton}>DONE</button>
            </div>
        </div>
    )
}

export default Todo;