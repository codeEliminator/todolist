import React, {useState} from 'react';
import './InputTask.css';
import { FiChevronDown } from 'react-icons/fi'; 
import { useTasksContext } from '../../hooks/useTasksContext';

export default function InputTask() {
  console.log('InputTask');
  const [task, setTask] = useState('');
  const { addTask } = useTasksContext()
  const handleButtonClick = (evt: React.MouseEvent<HTMLInputElement>) => {
    evt.preventDefault();
    addTask(task);
    setTask('');
  };
  
  return (
    <div className="input-container">
      <FiChevronDown className="input-icon" />
      <input
        value={task}
        type="text"
        className="task-input"
        placeholder="What needs to be done?"
        onChange={(e) => setTask(e.target.value)}
      />
      <input 
        type='button' 
        value='Add task' 
        className='input-button'
        onClick={handleButtonClick}
      />
    </div>
  );
}
