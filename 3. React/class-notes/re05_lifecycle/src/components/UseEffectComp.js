import React, {useState, useEffect} from 'react'

const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(4);
  

  useEffect(() => {
    console.log("UseEffectComp");
    count !== 0 && console.log("Count is not 0");
    // setCount(count + 1);
    let timer = setTimeout(() => {
      console.log("Timer");
    }, 3000);

    return () => {
      console.log("Cleanup");
      clearTimeout(timer);
    }

  }, [count]);
  
  const increase = () =>setCount(count+1)
  const increaseAge = () =>setAge(age+1)
  
  
    return (
      <div className="function">
        <h2>Functional Component</h2>
        <p>Count: {count}</p>
        <button onClick={increase}>Increase Count</button>
        <p>Age: {age}</p>
        <button onClick={increaseAge}>Increase Age</button>
  
      </div>
  )
}

export default UseEffectComp
