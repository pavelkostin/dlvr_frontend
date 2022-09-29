import React, { useState, useEffect } from 'react';

function CartItem({ item, onRemovePosition, index,
    /* positionCounter */
}) {

    const [positionCounter, setPositionCounter] = useState(1);

    function removeItem() {
        onRemovePosition(index);
    }

    function addOneMoreToCart() {
        setPositionCounter(positionCounter + 1)
    }

    function removeOneFromCart() {
        if (positionCounter === 1) {
            console.log('нельзя удалить');
        } else {
            setPositionCounter(positionCounter - 1)
        }
    }



    return (
        <div className='cart-item'>
            <button onClick={removeItem}>удалить</button>
            <h4 className='cart-item__name'>{item.name}</h4>
            <p className='cart-item__prize'>{item.prize}</p>
            <button
                onClick={() => removeOneFromCart()}
                className='promo-item__btn'>-1
            </button>
            <div>{positionCounter}</div>
            <button
                onClick={() => addOneMoreToCart()}
                className='promo-item__btn'>+1
            </button>


        </div>
    )
}

export default CartItem;