import {useState} from 'react';
import "./Item.css";

const Item = ({card}) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  }
  return (
            <div className="card" onClick={handleMouseEnter}>
              {
              isHovered ? 
              (<div>
                  <img className='card-logo' src={card.img} alt="logo" />
                  <h3 className='title'>{card.name}</h3>
                </div>) 
              : (<div className='card-back'>
                  {card.options.map((option, id) => <li key={id}>{option}</li>)}
                </div>)}
            </div>
              
  )
}

export default Item;