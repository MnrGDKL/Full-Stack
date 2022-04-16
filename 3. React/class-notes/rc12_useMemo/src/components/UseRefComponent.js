import React from 'react';
import { useEffect, useRef, useState } from 'react';
const UseRefComponent = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [value, setValue] = useState(0);
  
  //! useRef current value is not updated when the value is changed
  const valueRef = useRef(0);
  console.log(valueRef.current); //? used to show useRef value in console
  
  useEffect(() => {
    //! normal way to raach the DOM
    // document.querySelector("input").focus(); 
    //! useRef is the best way to reach the DOM in React
    inputRef.current.focus();
    inputRef.current.value = 'Hello';
    

  }, []);

  const changeBgColor = () => {
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    divRef.current.style.backgroundColor = randomColor;
    // const colors = ["orange", "red", "blue", "green", "yellow"];
    // const random = Math.floor(Math.random() * colors.length);
    // divRef.current.style.backgroundColor = colors[random];

    // divRef.current.style.backgroundColor = inputRef.current.value;

  }

const increase = () => {
  setValue(value + 1); 
  //? currently useRef is not updated when the value is changed,
  //? so we need to update it manually

  //? using setState we can see the updated useRef value
  valueRef.current = value;

}

  
  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input  ref={inputRef} placeholder="Enter text..." />
      <button onClick={changeBgColor}>Change BgColor</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default UseRefComponent;
