import Clock from "./Clock";
import "./Msg.css"
import butterfly from "./img/butterfly.jpg";
function Msg() {
  return (
    <div>
          <h1>Welcome to our React Courses</h1>
          <img 
          className="msg-img"
          src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg" alt="" />
          <img
          className="msg-img" 
          src={butterfly}
          alt="" />
          <Clock/>
    </div>
  )
}

export default Msg;