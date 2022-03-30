import { useState } from "react";


const AddTask = ({saveTask}) => {
const [title, setTitle] = useState("");
const [date, setDate] = useState("");

const Swal = require('sweetalert2');

  const saveTitle = (e) => {
    setTitle(e.target.value);
  }
  const saveDate = (e) => {
    setDate(e.target.value);
  }


const handleSave = (e) => {
  e.preventDefault();

  title === "" ? Swal.fire({
                    icon: 'error',
                    title: 'Enter a Task Name',
                  }) : 
  date === "" ? Swal.fire({
                    icon: 'error',
                    title: 'Enter a Valid Date!',
                  }) : 
  new Date(date) < new Date() ? Swal.fire({
                                    icon: 'error',
                                    title: 'Date must be in the future!',
                                  }) :
  saveTask(title, date)
  setTitle("");
  setDate("");

}

  return (
    <div className="task-info">
      <form className="add-form">
        <div className="form-control">
        <label htmlFor="taskName">Task</label>
        <input onChange={saveTitle} type="text" value={title} placeholder="Add Task" id="taskName" name="taskName"/>
        </div>
        <div className="form-control">
        <label htmlFor="date" >Day & Time</label>
        <input onChange={saveDate} type="date" value={date} placeholder="Add Day & Time" id="date" name="date"/>
        </div>
        <button onClick={handleSave}
              className="btn btn-block">Save Task</button>
      </form>
    </div>

  )
}

export default AddTask