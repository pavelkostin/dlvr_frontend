import React, { useState } from 'react';
import CartListItem from "../CartListItem/CartListItem";

const CartList = ({
    cartList,
    deletePhoneFromCart,
    addPhoneInCart,
    removeItemFromCartList,
    sendOrder
}) => {

    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    const handleChangeTel = (event) => {
        setTel(event.target.value);
    };
    const handleChangePickup = () => {
        if (!checked) {
            setChecked(true);
            setAddress('Киржач, Гагарина 6 (этаж 2)');
        } else {
            setChecked(false);
            setAddress('');
        }
    };

    const numberOfGoods = cartList.reduce((sum, i) => {
        return sum + i.count
    }, 0)

    const sumOfMoney = cartList.reduce((sum, i) => {
        return sum + i.count * i.totalPrice
    }, 0)


    function onSendOrder() {
        sendOrder()
        setName('')
        setTel('')
        setAddress('')
        setChecked(false)
    }

    return (
        <>
            <section className='shop-list'>
                <div className='shop-list-wrapper'>
                    <ul className='shop-list__list_cart'>
                        {cartList.map((cart) => {
                            const { id } = cart;
                            return (
                                <li key={id}>
                                    <CartListItem
                                        cartList={cartList}
                                        cart={cart}
                                        deletePhoneFromCart={deletePhoneFromCart}
                                        addPhoneInCart={addPhoneInCart}
                                        removeItemFromCartList={removeItemFromCartList}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {cartList.length === 0 && <section className='shop-list'>
                <div className='shop-list-wrapper'>
                    <ul className='shop-list__list_cart'>
                        <div className='shop-list__list'>Ваша корзина пуста</div>
                    </ul>
                </div>
            </section>}

            <section className='shop-list'>
                <div className='shop-list-wrapper'>
                    <input placeholder='Имя'
                        value={name}
                        onChange={handleChangeName}
                    />
                    <input placeholder='Адрес'
                        value={address}
                        onChange={handleChangeAddress}
                        disabled={checked ? true : false}
                    />
                    <input type='tel' placeholder='Телефон'
                    value={tel}
                    mask='000 000 0000'
                    onChange={handleChangeTel} />
                    <p>
                        Самовывоз
                        <input /* onChange={() => { onCheck() }} */
                            onChange={handleChangePickup}
                            type='checkbox'
                            checked={checked} />
                    </p>

                </div>
            </section>

            {cartList.length !== 0 && <section className='shop-list'>
                <div className='shop-list-wrapper'>
                    <ul className='shop-list__list_cart'>
                        <div>Итого</div>
                        <div>Товаров {numberOfGoods}</div>
                        <div>Сумма к оплате {sumOfMoney} рублей</div>
                    </ul>
                </div>
            </section>}


            <section className='shop-list'>
                <div className='shop-list-wrapper'>
                    <button
                        /* disabled={cartList.length === 0 ? true : false} */
                        disabled={!name || !tel || !address }
                        onClick={() => onSendOrder()}>Отправить заказ
                    </button>
                </div>
            </section>


        </>
    );
};

export default CartList;
