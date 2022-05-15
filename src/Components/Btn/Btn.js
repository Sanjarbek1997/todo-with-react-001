import Delete from "../../Assets/Icon/Icon";
import "./btn.css";
import localization from "../../Assets/Localization/Localization";

const Btn = ({num,deleteTodo,lang}) => {
	return (
		<button data-todo-id={num} onClick={deleteTodo} className='todo__btn' type='button'>
			<Delete />
			{localization[lang].list.del}
		</button>
	);
};

export default Btn;
