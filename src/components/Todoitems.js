import Todo from './Todo'
const Todoitems = ({todoList, setTodoList}) =>{
    return <div>
            {todoList.map( (items) => (
                <Todo setTodoList={setTodoList} todoList={todoList} key={items.id} items={items}></Todo>
            ))}
        </div> 
}
export default Todoitems 