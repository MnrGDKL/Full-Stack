import Task from "./task/Task";

const Tasks = ({allTask, deleteTask, taskCompleted}) => {
  return (
    
    <div>
      {allTask.length < 1 
      ?
      <h2>No Task to Show</h2> 
      :
      allTask.map(task => <Task  key = {task.id} 
                                  task = {task} 
                                  deleteTask = {deleteTask} 
                                  completedTask = {taskCompleted}/>)}
    </div>
  )
}

export default Tasks