import React, { useEffect, useState } from 'react';
import Counter from '../Counter/Counter';

const ShopListItem = ({ phone, addPhoneInCart, countItem, cartList }) => {
    const { name, description, price, url, id } = phone
    const [clicked, setClicked] = useState(false);
    const [number, setNumber] = useState(0);
    const isAdded = cartList.some(i => i.id === id);
    const getCount = cartList.find(i => i.id === id);

    useEffect(() => {
        if (isAdded) {
            setClicked(true);
            setNumber(getCount.count)
        } else {
            setClicked(false);
            setNumber(0);
        }
    }, [cartList, isAdded, getCount]);

    function onAddPhoneInCart() {
        addPhoneInCart(phone);
    }

    return (
        <div className='shop-list-item'>

            <div className='shop-list-item__image'>
                <img src={url} alt='Картинка телефона' className='shop-list-item__url' />
            </div>
            <h3 className='shop-list-item__name'>{name}</h3>

            <p className='promo-item__para'>{description}</p>
            <span className='shop-list-item__price'>Цена: {price}</span>
            
            <button className='button'
                onClick={() => onAddPhoneInCart()}
            >{!clicked ? 'Купить' : 'В корзине'}</button>
            <span className='shop-list-item__description'>{countItem}</span>
            <span className='shop-list-item__description'>{number}</span>
            <Counter />
        </div>

    )
};

export default ShopListItem;