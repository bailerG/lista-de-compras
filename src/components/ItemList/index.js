import './ItemList.css'

const ItemList = (props) => {

    return (
        props.trigger.map(item =>

            <button className='item-option' onClick={() => props.setItems([...props.items, item])}>
                <div className='color'>
                    <img src={item.img} alt={item.name}></img>
                </div>
                <div className='item-name'>
                    <p>{item.name}</p>
                </div>
            </button>
        )
    )

}

export default ItemList