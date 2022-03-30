import "./Task.css";
import {FaTimesCircle} from "react-icons/fa"; 

const Task = ({task, deleteTask, completedTask}) => {
  const deleteEvent = () => {
     deleteTask(task.id);
  }

  const taskCompleted = () => {
    completedTask(task.id);
  }
  
  return (
    <div className={`tasks ${task.completed ? "done" : "not-done"}`}>
      <div onDoubleClick={taskCompleted} key={task.id}
           className = "task-container">
        <h3>{task.title}</h3>
        <p>{task.date}</p>
      </div>
      <div>
        <span onClick={deleteEvent}> <FaTimesCircle/></span>
      </div>
    </div>
  )
}

export default Task