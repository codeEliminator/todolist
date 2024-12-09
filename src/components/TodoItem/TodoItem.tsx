import './TodoItem.css';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

type TodoItemProps = {
  task: string;
  completed: boolean;
  toggleTask: () => void;
  deleteTask: () => void;
};

export function TodoItem({ task, completed, toggleTask, deleteTask }: TodoItemProps) {
  return (
    <div className="todo-item">
      <span onClick={toggleTask} className="todo-icon">
        {completed ? <FiCheckCircle className="completed-icon" /> : <FiCircle className="active-icon" />}
      </span>
      <span className={`todo-text ${completed ? 'completed' : ''}`}>{task}</span>
      <button onClick={deleteTask} className="delete-btn">
        ×
      </button>
    </div>
  );
}
