import Btn from "../Btn/Btn";
import Checkbox from "../Checkbox/Checkbox";

import "./listItem.scss";

const Item = ({ isCompleted, title, son, deleteTodo, completed,lang }) => {
	return (
		<li className='todo__item'>
			<Checkbox  isCompleted={isCompleted} id={son} completed={completed} />
			<strong className={isCompleted ? "todo__title complete" : "todo__title"}>
				{title}
			</strong>
			<Btn lang={lang} num={son} deleteTodo={deleteTodo} />
		</li>
	);
};
export default Item;
