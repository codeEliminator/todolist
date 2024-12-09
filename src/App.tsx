import './App.css'
import InputTask from './components/InputTask/InputTask'
import TodoList from './components/TodoList/TodoList'

export default function App() {
  console.log('App');
  return (
    <div className='content-wrapper'>
        <div className='header'>
            <h1 style={{color: 'lightpink', fontSize: '50px'}}>todos</h1>
        </div>
        <div className='content'>
            <div className='todo-input'>
                <InputTask></InputTask>
            </div>
            <div className='todo-list'>
                <TodoList />
            </div>
        </div>
    </div>
    
  )
}
