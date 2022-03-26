import React from 'react'
import ClassComponent from './components/ClassComponent'
import UseStateComp from './components/UseStateComp';
import { useState } from 'react';
import UseEffectComp from './components/UseEffectComp';
import Users from './components/Users';

function App() {
  const [isVisible, setIsVisible] = useState(true);


  return (
    <div className="App">
      {/* <h2>LifeCycles</h2> */}
      {/* <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button> */}
     {/*isVisible && <ClassComponent/>} */}
     
     {/* <UseStateComp/> */}

     {/* {isVisible && <UseEffectComp/>} */}

     <Users/>
    </div>
  )
}

export default App
