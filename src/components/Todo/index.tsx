import styles from "./styles.module.css";

import { FiPlusCircle } from "react-icons/fi";

import { useState, type ChangeEvent } from "react";

import { v4 as uuidV4 } from "uuid";
import { type Todo as Todos } from "../../models/todo";

import { TodoInfo } from "./TodoInfo";
import { TodoList } from "./TodoList";
import { TodoListEmpty } from "./TodoListEmpty";

export function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todos[]>([]);

  function handleSetNewTodo(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleCreateNewTodoChange() {
    const newTodoList: Todos = {
      id: uuidV4(),
      name: newTodo,
      done: false
    };

    setTodos([...todos, newTodoList]);
    setNewTodo("");
  }

  function changeTodoStatus(todoId: string) {
    const todoIndex = todos.findIndex(({ id }) => todoId === id);

    const todoStatusChanged = todos[todoIndex];

    Object.assign(todoStatusChanged, {
      done: !todoStatusChanged.done
    });

    setTodos([...todos]);
  }

  function deleteTodo(todoId: string) {
    const withoutDeletedTodo = todos.filter(({ id }) => todoId !== id);

    setTodos([...withoutDeletedTodo]);
  }

  const todosCreated = todos.length ?? 0;
  const todosDone = todos.filter((todo) => todo.done).length ?? 0;

  return (
    <main className={styles.main}>
      <section className={styles.container_create_todo}>
        <div className={styles.input_todo_name}>
          <span>Descrição da tarefa</span>

          <input
            value={newTodo}
            onChange={handleSetNewTodo}
            placeholder="Adicione uma nova tarefa"
            type="text"
          />
        </div>

        <button
          onClick={handleCreateNewTodoChange}
          className={styles.btn_add_todo}
        >
          <p>Criar</p>
          <FiPlusCircle width={16} height={16} />
        </button>
      </section>

      <section className={styles.todo_list_container}>
        <TodoInfo todosCreated={todosCreated} todosDone={todosDone} />

        {todos.length === 0 ? (
          <TodoListEmpty />
        ) : (
          <TodoList
            todos={todos}
            onChangeTodoStatus={changeTodoStatus}
            onDeleteTodo={deleteTodo}
          />
        )}
      </section>
    </main>
  );
}
