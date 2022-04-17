import React, { useEffect } from 'react'
import { GoTriangleUp } from 'react-icons/go';
import { VscTriangleDown } from 'react-icons/vsc';

const Floors = () => {
  const floors = [5,4,3,2,1,0]


  const [elevator, setElevator] = React.useState(5);
  const [que, setQue] = React.useState([]);

  const handleGoUp = (floor) => {
    if (elevator < floors.length - 1 && floor === elevator) {
      setElevator(elevator + 1)
    }
  }

  const handleGoDown = (floor) => {
    if (elevator > 0 && elevator === floor) {
      setElevator(elevator - 1)
    }
  }

  const handleGoToFloor = (floor) => {
    let newQue = [...que, floor];
    console.log("newQue", newQue);
    setQue(newQue);

  }


  useEffect(() => {
    // console.log(que)
    if (que.length > 0) {
      setTimeout(() => {
        let currentque = que.sort((a, b) => b - a)[0];
        // console.log("currentque", currentque);
        setElevator(currentque);
      }, 2000)
      setQue(que.slice(1))
      console.log("que", que);
    }
  }, [que])



  return (
    floors.map(floor => (
      <div key={floor}>
        <div className='floor-box'>
          <div className={floor === elevator ? "floors-active" : "floors"}>
            {floor}
            {elevator === floor ? (
              <div className='buttons-div'>
                {floors.map(floor => 
                  <button key={floor} onClick={()=>handleGoToFloor(floor)}>{floor}</button>)}
              </div>
            ) : null}
          </div>
          <div className="up-down">
            <button onClick={()=> handleGoUp(floor)}><GoTriangleUp/></button>
            <button onClick={()=> handleGoDown(floor)}><VscTriangleDown/></button>
          </div>
        </div>
      </div>)))
}

export default Floors