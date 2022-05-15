import Block from '../Block/Block';
import TodoSum from '../TodoSum/TodoSum';

import localization from '../../Assets/Localization/Localization';

import "./footer.scss"

const Footer = ({ lang,todosum,unCompletedTodos,completedTodos,allTodos }) => {
	return (
		<footer className='footer'>
			<TodoSum todosum={todosum} text={localization[lang].footer.sumText} />
			<div>
				<Block compUncomp={allTodos} text={localization[lang].footer.all} />
				<Block compUncomp={completedTodos} text={localization[lang].footer.comp} />
				<Block compUncomp={unCompletedTodos} text={localization[lang].footer.uncomp} />
			</div>
		</footer>
	);
};

export default Footer;
