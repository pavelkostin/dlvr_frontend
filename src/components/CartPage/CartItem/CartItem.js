

function CartItem({ item, onRemovePosition, index }) {


    function removeItem() {
        onRemovePosition(index);
        
    }

    return (
        <div className='cart-item'>
            <h4 className='cart-item__name'>{item.name}</h4>
            <button onClick={removeItem}>удалить</button>
            <p className='cart-item__prize'>{item.prize}</p>
            <div>{index}</div>
        </div>
    )
}

export default CartItem;