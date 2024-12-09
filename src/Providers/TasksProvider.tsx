import { useTasks } from '../hooks/useTasks';
import { TasksContext } from '../context/TasksContext';
export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const tasksData = useTasks();
  
    return (
      <TasksContext.Provider value={tasksData}>
        {children}
      </TasksContext.Provider>
    );
};