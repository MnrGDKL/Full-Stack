import Task from "./task/Task";

const Tasks = ({allTask, deleteTask, taskCompleted}) => {
  return (
    
    <div>
      {allTask.length < 1 
      ?
      <h3>No Task to Show</h3> 
      :
      allTask.map(task => <Task  key = {task.id} 
                                  task = {task} 
                                  deleteTask = {deleteTask} 
                                  completedTask = {taskCompleted}/>)}
    </div>
  )
}

export default Tasks