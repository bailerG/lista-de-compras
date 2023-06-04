import { useState } from 'react'
import ItemCard from '../ItemCard'
import './ItemGrid.css'
import Menu from '../Menu'



const ItemGrid = (props) => {

    const [items, setItems] = useState([])

    const [btnPopup, setBtnPopup] = useState(false)

    return items.length > 0 ? (
        <section>
            <div className='grid' >
                <div className='items'>
                    {items.map(item =>
                        <ItemCard
                            key={item.name}
                            name={item.name}
                            img={item.img}
                        />)}
                </div>
                <div className='add-item-btn'>
                    <button onClick={() => setBtnPopup(true)}> + </button>
                </div>
            </div>
            <Menu trigger={btnPopup} setTrigger={setBtnPopup} items={items} setItems={setItems} />
        </section>

    ) : <section>
        <div className='grid' >
            <h2 className='welcome'>Welcome!</h2>
            <p className='prototype'>* This is a prototype</p>
            <div className='items'>
                {items.map(item =>
                    <ItemCard
                        key={item.name}
                        name={item.name}
                        img={item.img}
                    />)}
            </div>
            <div className='add-item-btn'>
                <button onClick={() => setBtnPopup(true)}> + </button>
            </div>
        </div>
        <Menu trigger={btnPopup} setTrigger={setBtnPopup} items={items} setItems={setItems} />
    </section>
}

export default ItemGrid