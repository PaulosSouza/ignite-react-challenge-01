import styles from "./styles.module.css";
import clipboard from "../../../assets/clipboard.png";

export function TodoListEmpty() {
  return (
    <div className={styles.todo_list}>
      <img src={clipboard} alt="Clipboard" />

      <p>Você ainda não tem tarefas cadastradas</p>

      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};