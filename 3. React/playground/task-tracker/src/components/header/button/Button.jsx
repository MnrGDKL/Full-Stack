
const Button = ({showTasks, showDetails, color, title}) => {
const handleShow = () => {
  showDetails(!showTasks);
}

  return (
    <div>
      <button onClick={handleShow} 
      className = "btn"
      style = {{backgroundColor: color}}> {title} </button>
    </div>
  )
}

export default Button