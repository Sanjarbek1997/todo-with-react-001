import "./checkbox.css"

const Checkbox  =({isCompleted,completed,id})=>{
    return (
        <>
        <input checked={isCompleted} onChange={completed} className="todo__checkbox" data-todo-id={id} type={"checkbox"}/>
        </>
    )
}
export default Checkbox;