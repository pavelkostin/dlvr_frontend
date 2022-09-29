import React, { useEffect, useState } from 'react';

function Product({ phone, addPhoneInCart, countItem, cartList, deletePhoneFromCart }) {

    const { name, description, price, url, id, weight } = phone;
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


    function onDeletePhoneInCart() {
        deletePhoneFromCart(phone);
    }

    return (
        <>
            <div className='promo-item'>



                <div className='promo-item__container promo-item__container_row'>

                    <h3 className='promo-item__h3'>{name}</h3>
                    <h3 className='promo-item__h3'>{price} ₽</h3>

                </div>

                <div className='promo-item__container promo-item__container_row'>
                    <p className='promo-item__para'>{description}</p>
                    <p className='promo-item__para'>Вес: {weight} гр.</p>
                </div>

                <div className='promo-item__container'>

                    <img className='promo-item__img' src={url} alt={name}

                    />

                    <div className='promo-item__container promo-item__container_row'>
                        <div className={`promo-item__btn ${clicked ? 'promo-item__btn_clicked' : ''}`}>{number}</div>

                        {clicked && <button className='promo-item__btn' onClick={()=> onAddPhoneInCart()}>+</button>}
                        {clicked && <button className='promo-item__btn' onClick={() => onDeletePhoneInCart()}>-</button>}

                        <button
                            className={`promo-item__btn ${clicked ? 'promo-item__btn_clicked' : ''}`}
                            disabled={clicked ? true : false}
                            onClick={() => { onAddPhoneInCart() }}
                        >{`${clicked ? 'в корзине' : 'в корзину'}`}
                        </button>


                    </div>



                </div>



            </div>
        </>
    )
}

export default Product;