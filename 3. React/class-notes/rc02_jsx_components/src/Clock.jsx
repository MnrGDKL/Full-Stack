import { useState, useEffect } from 'react';

function Clock() {

  const [date, setDate] = useState(new Date());

  function refreshTime() {
    setDate(new Date());
  }
  
  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="msg-img">
      <p>
      <span> {date.getDate().toString().padStart(2,0)}</span>
      <span> /</span>
      <span> {date.getMonth().toString().padStart(2,0)}</span>
      <span> /</span>
      <span> {date.getFullYear()}</span>


      </p>
         <p>
           <span> {date.getHours().toString().padStart(2,0)}</span>
           <span> :</span>
           <span> {date.getMinutes().toString().padStart(2,0)}</span>
           <span> :</span>
           <span> {date.getSeconds().toString().padStart(2,0)}</span>
         </p> 
    </div>
  )
}

export default Clock;