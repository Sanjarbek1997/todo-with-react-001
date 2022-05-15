import Btn from "../Btn/Btn";

import "./listItem.scss"

const Item = ({ title, son,deleteTodo }) => {
	return (
		<li className='todo__item'>
            
			<strong className="todo__title">{title}</strong>
			<Btn num={son} deleteTodo={deleteTodo} />
		</li>
	);
};
export default Item;
