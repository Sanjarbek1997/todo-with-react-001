import Delete from "../../Assets/Icon/Icon";
import "./btn.css";

const Btn = ({num,deleteTodo}) => {
	return (
		<button data-todo-id={num} onClick={deleteTodo} className='todo__btn' type='button'>
			<Delete />
			Delete
		</button>
	);
};

export default Btn;
