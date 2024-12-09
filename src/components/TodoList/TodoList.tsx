import { useState } from 'react';
import { useTasksContext } from "../../hooks/useTasksContext";
import { TodoItem } from "../TodoItem/TodoItem";
import './TodoList.css';

export default function TodoList() {
  const [filterActive, setFilterActive] = useState('All');
  const { tasks, toggleTaskCompletion, deleteTask, clearCompletedTasks } = useTasksContext();

  const handleFilterChange = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = evt.target as HTMLDivElement;
    setFilterActive(target.innerText);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterActive === 'All') return true;
    if (filterActive === 'Active') return !task.completed;
    if (filterActive === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-list-wrapper">
      <div className="todo-items-container">
        {filteredTasks.map((task, idx) => (
          <TodoItem
            key={idx}
            task={task.task}
            completed={task.completed}
            toggleTask={() => toggleTaskCompletion(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </div>
      <div className="footer-items">
        <div className="items-left">
          {`${tasks.filter((task) => !task.completed).length} items left`}
        </div>
        <div className="filter-tasks">
          <div
            onClick={handleFilterChange}
            className={filterActive === 'All' ? 'active' : ''}
          >
            All
          </div>
          <div
            onClick={handleFilterChange}
            className={filterActive === 'Active' ? 'active' : ''}
          >
            Active
          </div>
          <div
            onClick={handleFilterChange}
            className={filterActive === 'Completed' ? 'active' : ''}
          >
            Completed
          </div>
        </div>
        <div
          className="clear-completed"
          onClick={() => clearCompletedTasks()}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
}
