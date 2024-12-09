import { useState, useEffect } from 'react';
import { Task } from '../types/Taks';
import { generateRandomId } from '../helpers/generateRandomId';

export function useTasks() {
  console.log('useTasks');
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const existingTasks = localStorage.getItem('tasks');
    if (existingTasks) {
      setTasks(JSON.parse(existingTasks));
    }
  }, []);


  const addTask = (newTask: string) => {
    if (!newTask) return;    
    const updatedTasks = [...tasks, { task: newTask, completed: false, id: generateRandomId() }];
    setTasks(updatedTasks); 
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  };

  const deleteTask = (taskToDelete: string) => {
    console.log(typeof taskToDelete);
    const updatedTasks = tasks.filter((t) => t.id !== taskToDelete);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = (taskToToggle: string) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskToToggle ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed); 
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  };
  
  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    clearCompletedTasks
  };
}
