import { FiTrash2 } from "react-icons/fi";
import { Todo } from "../../../models/todo";

import styles from "./styles.module.css";

interface TodoListProps {
	todos: Todo[];
	onChangeTodoStatus: (todoId: string) => void;
	onDeleteTodo: (todoId: string) => void;
}

export function TodoList({
	todos,
	onChangeTodoStatus,
	onDeleteTodo,
}: TodoListProps) {
	function handleCheckboxChange(id: string) {
		onChangeTodoStatus(id);
	}

	function handleDeleteTodo(id: string) {
		onDeleteTodo(id);
	}

	return (
		<section className={styles.todo_list_container}>
			<div className={styles.todo_list}>
				{todos.map((todo) => {
					return (
						<div key={todo.id} className={styles.todo_item}>
							<input
								onChange={() => handleCheckboxChange(todo.id)}
								checked={todo.done}
								type="checkbox"
							/>

							<p>{todo.name}</p>

							<button
								onClick={() => handleDeleteTodo(todo.id)}
								className={styles.btn_remove_item}
							>
								<FiTrash2 width={24} height={24} />
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}
