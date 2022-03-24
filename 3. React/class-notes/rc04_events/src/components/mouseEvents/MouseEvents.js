import { useState } from "react";
import './styles.css';

const MouseEvents = () => {
  // click event
  const handleClick = (e)=>{
    console.log(e);
    e.target.tagName === "SPAN" && e.currentTarget.remove();
  }

  const handleDoubleClick = (e) =>{
    console.log(e.target.innerText);
  }

  const [x, setx] = useState();
  const [y, sety] = useState();
  const [pageX, setpageX] = useState();
  const [pageY, setpageY] = useState();



  const handleMouseMove = (e) =>{
    setx(e.nativeEvent.offsetX);
    sety(e.nativeEvent.offsetY);
    setpageX(e.nativeEvent.pageX);
    setpageY(e.nativeEvent.pageY);
    
    
  }

  // doubleClick event
  // mouseMove event

  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>{x}</span> and {y}
      </p>
      <p>
        <span>{pageX}</span> and {pageY}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2" onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
