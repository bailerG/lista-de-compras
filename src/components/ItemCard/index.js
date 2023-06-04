import './ItemCard.css';
import { useState } from "react";


const ItemCard = ({color, name, img}) => {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='item'>
            <div className='color'>
                <img src={img} alt={name}/>
            </div>
            <div className='item-name'>
                <h4>{name}</h4>
                <p>{isChecked ? "It's on your cart" : "You didn't get it yet"}</p>
                <input type='checkbox' checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
            </div>
        </div>
        )
}

export default ItemCard