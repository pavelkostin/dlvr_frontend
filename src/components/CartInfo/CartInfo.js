import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cartImg from '../../images/cart.svg';


const CartInfo = ({ cartList }) => {




    const numberOfGoods = cartList.reduce((sum, i) => {
        return sum + i.count
    }, 0)

    const sumOfMoney = cartList.reduce((sum, i) => {
        return sum + i.count * i.totalPrice
    }, 0)


    return (

        <div className='navigation'>
            <ul className='navigation__wrapper'>
                <div className='navigation__item'>
                    <div to='/cart-list' className='header-contacts header-contacts_hidden'>
                        <Link className='header-contacts-item header-contacts-item_hidden header-contacts-item_column'
                            to='/cart-list'>
                            <div className='promo-item__btn'>товаров {numberOfGoods}</div>
                            <div className='promo-item__btn'>на сумму {sumOfMoney}</div>
                            <img src={cartImg} className='header-contacts-img header-contacts-img_hidden' alt='tel_img' />
                            Корзина
                        </Link>
                    </div>

                </div>
            </ul>
        </div >
    )
};

export default CartInfo;
