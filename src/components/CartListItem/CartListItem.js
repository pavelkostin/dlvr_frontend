import React from 'react';

const CartListItem = ({ cart, deletePhoneFromCart, addPhoneInCart, removeItemFromCartList, cartList }) => {
    
    const { name, url, count, totalPrice, id } = cart;

    function onDeleteItemFromCart() {
        deletePhoneFromCart(cart)
    }

    function onAddPhoneInCart() {
        addPhoneInCart(cart)
        

    }

    function onRemoveItem() {
        removeItemFromCartList(cart)

    }

    return (
        <div className="cart-list-item">
            <div className="cart-list-item__header">
                <div className="cart-list-item__image">
                    <img src={url} alt="Телефон" />
                </div>
                <h4 className='cart-list-item__name'>{name}</h4>
            </div>
            <div className='cart-list-item__quantity'>
                <button className="button-cart" onClick={()=> onAddPhoneInCart()}>+</button>
                <span className="cart-list-item__count">{count}</span>
                <button className="button-cart" onClick={() => onDeleteItemFromCart()}>-</button>
            </div>
            <span className="cart-list-item__total-price">{totalPrice}</span>
            <div className="cart-list-item__delete" onClick={() => onRemoveItem()}>Удалить</div>
        </div>
    )
};

export default CartListItem;
