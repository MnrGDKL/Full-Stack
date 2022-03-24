
const Card = ({id, title, desc, image}) => {
  return (
    <div className='cards' key={id}>
      
      <div className='title'>
        <h1>{title}</h1>
      </div>
      
      <img src={image} alt="" />

      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card;