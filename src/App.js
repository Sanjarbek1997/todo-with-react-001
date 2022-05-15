import { useRef, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Input from './Components/Input/Input';
import Item from './Components/ListItem/ListItem';

import localization from './Assets/Localization/Localization';

function App() {
	const elSelect = useRef();

	const [lang, setLang] = useState('en');

	const [todos, setTodos] = useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	);
	const [mainTodo, setMainTodo] = useState([...todos]);

	const inputChange = (evt) => {
		let value = evt.target.value;
		const newTodo = {
			id: todos[todos.length - 1]?.id + 1 || 1,
			title: value,
			isCompleted: false,
		};
		if (evt.code === 'Enter' && value.length > 0) {
			window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
			setTodos([...todos, newTodo]);
			setMainTodo([...todos, newTodo]);
			evt.target.value = '';
		}
	};

	const deleteTodo = (evt) => {
		const num = evt.target.dataset.todoId - 0;

		const filtrTodos = todos.filter((item) => item.id !== num);
		// console.log(num);
		window.localStorage.setItem('todos', JSON.stringify(filtrTodos));
		setTodos(filtrTodos);
		setMainTodo(filtrTodos);
	};

	const completed = (evt) => {
		const completedId = evt.target.dataset.todoId - 0;

		const findItem = todos.find((item) => item.id === completedId);

		findItem.isCompleted = !findItem.isCompleted;
		setTodos([...todos]);
		setMainTodo([...todos]);
		window.localStorage.setItem('todos', JSON.stringify([...todos]));
	};

	const completedTodos = () => {
		const completedTodos = todos.filter((item) => item.isCompleted === true);
		setMainTodo(completedTodos);
	};
	const unCompletedTodos = () => {
		const unCompletedTodos = todos.filter((item) => item.isCompleted === false);
		setMainTodo(unCompletedTodos);
	};
	const allTodos = () => {
		setMainTodo([...todos]);
	};

	return (
		<>
			<header className='header'>
				<h1 style={{ color: 'red', textAlign: 'center' }}>
					{localization[lang].header.title}
				</h1>
				<select
					onChange={() => {
						setLang(elSelect.current.value);
					}}
					ref={elSelect}
					className='todo_select'>
					<option value='en'>ENG</option>
					<option value='uz'>UZB</option>
					<option value='ru'>РУС</option>
				</select>
			</header>

			<Input text={localization[lang].header.input} change={inputChange} />
			{todos.length > 0 && (
				<ul>
					{mainTodo.map((item) => (
						<Item
							isCompleted={item.isCompleted}
							completed={completed}
							key={item.id}
							deleteTodo={deleteTodo}
							son={item.id}
							title={item.title}
							lang={lang}
						/>
					))}
				</ul>
			)}
			<Footer
				allTodos={allTodos}
				unCompletedTodos={unCompletedTodos}
				completedTodos={completedTodos}
				lang={lang}
				todosum={todos.length}
			/>
		</>
	);
}

export default App;
