

const AddEvents = ()=>{
  
  function shoot () {
    alert("Great Shot!");
  }
  
  return(
    <div>
      {/* <button onClick={shoot}>Take the Shoot</button> */}
      <button onClick={()=> shoot()}>Take the Shoot</button>

    </div>
  )
}

export default AddEvents;