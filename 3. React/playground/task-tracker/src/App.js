import './App.css';
import AddTask from './components/addTask/AddTask';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import { useState } from 'react';

function App() {
  const [details, setDetails] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      date: '2022-05-05',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      date: '2022-04-04',
      completed: true
    },
    {
      id: 3,
      title: 'Task 3',
      date: '2022-06-06',
      completed: false
    }
  ]);

  const saveTask = (taskName, taskDate) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskName,
      date: taskDate,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => task.id === id 
                                            ? { ...task, completed: !task.completed } 
                                            : task );
    setTasks(updatedTasks);
  }

  const showDetails = (e) => {
    setDetails(!details);
  }






    return (
      <div className="container">
        <Header showDetails = {showDetails}
                title = "Task Tracker"
                color = {details ? "purple" : "red"}
                details = {details} />
        {details ?  <><AddTask saveTask = {saveTask}/>
                      <Tasks allTask = {tasks}
                            deleteTask = {deleteTask}
                            taskCompleted = {completeTask}/>
                    </> 
                  : <h4>No Task to Show</h4>}
      </div>
    );
  }

export default App;
