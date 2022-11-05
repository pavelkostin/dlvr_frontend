import React from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../../images/cart.svg';


const CartInfo = ({ cartList }) => {

    const numberOfGoods = cartList.reduce((sum, i) => {
        return sum + i.count
    }, 0)

    const sumOfMoney = cartList.reduce((sum, i) => {
        return sum + i.count * i.totalPrice
    }, 0)


    return (

        <div className='cart-info'>
            <ul className='cart-info__wrapper'>

                <Link className='cart-info__link' to='/cart-list'>
                    {/* <img src={cartImg} className='' alt='tel_img' /> */}
                    <div className='cart-info__p'>Корзина</div>
                    <div className='cart-info__p'>|</div>
                    <div className='cart-info__p'>{numberOfGoods} </div>
                </Link>

            </ul>
        </div >
    )
};

export default CartInfo;
