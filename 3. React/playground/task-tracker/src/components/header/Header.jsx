import Button from "./button/Button"
import PropTypes from "prop-types";

const Header = ({showDetails, title, color, details}) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button showTasks = {true}
              showDetails = {showDetails}
              color = {color}
              title = {details ? "Close Add Task Bar" : "Show Add Task Bar"}/>
    </div>
  )
}

Header.propTypes = {
  showDetails: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Header