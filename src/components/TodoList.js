import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	console.log(todos);

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map(todo => (
					<Todo
						text={todo.text}
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;