import './Menu.css'
import ItemList from '../ItemList'
import { useState } from 'react'

const Menu = (props) => {

    const vegetables = [
        {
            name: 'Potato',
            img: '/imgs/Potato-PNG-Picture Small.png',
        },
        {
            name: 'Lettuce',
            img: '/imgs/alface-crespa-verde-hidropônica Small.png'
        },
        {
            name: 'Carrot',
            img: '/imgs/purepng.com-carrotcarrotdomestic-carrotfast-growingcarrots-1701527243731np6ec Small.png'
        },
        {
            name: 'Broccoli',
            img: '/imgs/purepng.com-fresh-broccolivegetables-broccoli-941524712680vbaj1 Small.png'
        },
    ]

    const meat = [
        {
            name: 'Bacon',
            img: '/imgs/purepng.com-baconfood-meat-fried-pork-cooked-941524619205lmptp Small.png'
        },
        {
            name: 'Ham',
            img: '/imgs/purepng.com-hamhamporkswinemeat-1411527528692xsf7x Small.png'
        },
        {
            name: 'Steak',
            img: '/imgs/purepng.com-meatfood-meat-red-fresh-grill-cook-beef-steak-941524623742oddr6 Small.png'
        }
    ]

    const [itemKind, setItemKind] = useState([])

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <h2>Add an item to your cart:</h2>

                <button className='item-category' onClick={() => setItemKind(vegetables)}>Vegetables</button>
                <button className='item-category' onClick={() => setItemKind(meat)}>Meat</button>

            </div>
            <div className='inner-items'>
                <ItemList trigger={itemKind} setTrigger={setItemKind} items={props.items} setItems={props.setItems}/>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Back</button>
            </div>
        </div>
    ) : ""
}

export default Menu
