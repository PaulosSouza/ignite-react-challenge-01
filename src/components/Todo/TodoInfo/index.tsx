import styles from "./styles.module.css";

type TodoInfoProps = {
    todosCreated: number;
    todosDone: number;
};

export function TodoInfo({ todosCreated, todosDone }: TodoInfoProps) {
  return (
    <div className={styles.todo_info}>
      <div className={styles.todo_created}>
        <p>
          Tarefas criadas <span className={styles.todo_counter}>{todosCreated}</span>
        </p>
      </div>

      <div className={styles.todo_done}>
        <p>
          Concluidas <span className={styles.todo_counter}>{todosDone} de {todosCreated}</span>
        </p>
      </div>
    </div>
  );
}
