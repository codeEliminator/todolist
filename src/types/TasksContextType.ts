import { Task } from "../types/Taks";
export type TasksContextType = {
    tasks: Task[];
    addTask: (newTask: string) => void;
    deleteTask: (taskToDelete: string) => void;
    toggleTaskCompletion: (taskToToggle: string) => void;
    clearCompletedTasks: () => void;
  };