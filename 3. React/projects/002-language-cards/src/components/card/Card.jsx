import "./Card.css"
import {languages} from "../../helper/data.js";
import Item from "../item/Item";

const Card = () => {
 
  console.log(languages);
  return (
    <div className='cards-area-container'>
      <h5 className="header">Languages</h5>
      <div className="cards-container">
        {languages.map((item, id) => <Item card={item} key={id}/>)}
      </div>
    </div>
  )
}

export default Card