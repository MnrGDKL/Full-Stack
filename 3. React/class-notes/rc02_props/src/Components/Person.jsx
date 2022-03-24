import React from 'react'
import Message from './Message'

function Person(props) {
  const {name,img,tel} = props;
  return (
    <div>
          <Message name={name}/>
        <h2>{name}</h2> 
        <h2>{img}</h2> 
        <h2>{tel}</h2> 

    </div>
  )
}

export default Person