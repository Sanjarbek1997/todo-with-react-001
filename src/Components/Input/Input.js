import './input.scss';

const Input = ({ change,text }) => {
	return (
		<>
			<input
				className='todo__input'
				onKeyUp={change}
				type={'text'}
				placeholder={text}
			/>
		</>
	);
};

export default Input;
