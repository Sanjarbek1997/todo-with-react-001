import { useState } from "react";
import Input from "./Component/Input/Input";
import Item from "./Component/ListItem/ListItem";

function App() {
	const [todos, setTodos] = useState([]);

	const inputChange = (evt) => {
		let value = evt.target.value;
		const newTodo = {
			id: todos[todos.length - 1]?.id + 1 || 1,
			title: value,
			isCompleted: false,
		};
		if (evt.code === "Enter" && value.length > 0) {
			setTodos([...todos, newTodo]);
			evt.target.value = "";
		}
	};

	const deleteTodo = (evt) => {
		const num = evt.target.dataset;

		const filtrTodos = todos.filter((item) => item.id != num.todoId);
		// console.log(num);
		setTodos(filtrTodos);
	};

	return (
		<>
			<h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
				Todo List with React
			</h1>
			<Input change={inputChange} />
			{todos.length > 0 && (
				<ul>
					{todos.map((item) => (
						<Item
							key={item.id}
							deleteTodo={deleteTodo}
							son={item.id}
							title={item.title}
						/>
					))}
				</ul>
			)}
		</>
	);
}

export default App;
