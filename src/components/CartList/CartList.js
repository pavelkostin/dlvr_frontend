import React, { useState, useContext } from 'react';
import CartListItem from '../CartListItem/CartListItem';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const CartList = ({
    cartList,
    deletePhoneFromCart,
    addPhoneInCart,
    removeItemFromCartList,
    sendOrder
}) => {

    const currentUser = useContext(CurrentUserContext);

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


    const [ordersHistory, setOrdersHistory] = useState([]);

    React.useEffect(()=>{
        const m =  localStorage.getItem('orderHistory')
        if(!m) {
            localStorage.setItem('orderHistory', JSON.stringify(ordersHistory))
        }
    }, [ordersHistory])

    function createOrder() {
        return {
            id: Date.now().toString(36) + Math.random().toString(36).substring(2),
            date: new Date().toLocaleString(),
            name: name,
            address: address,
            tel: tel,
            positions: cartList,
            sumOfMoney: sumOfMoney
        }
    }

    function updateOrderList(orderList, newOrder) {
        if(orderList.length === 0) {
            setOrdersHistory([newOrder])
            return ([newOrder])
        }
        setOrdersHistory([...orderList, newOrder])
        return ([...orderList, newOrder])
    }

    function onSendOrder(event) {
        event.preventDefault()
        const newOrder = createOrder();
        const b =  localStorage.getItem('orderHistory')
        const b_parsed = JSON.parse(b);
        const newOrderList = updateOrderList(b_parsed, newOrder)
        setOrdersHistory([])
        localStorage.setItem('orderHistory', JSON.stringify(newOrderList))
        sendOrder()
    }



    return (
        <>
            <section className='shop-list'>
                <div className='shop-list-wrapper shop-list-wrapper_column'>

                    <h2>Привет, {currentUser.username}</h2>
                    
                    

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

            <form onSubmit={onSendOrder}>

                <div className='shop-list'>
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
                            <input
                                onChange={handleChangePickup}
                                type='checkbox'
                                checked={checked} />
                        </p>


                    </div>
                </div>

                {cartList.length !== 0 && <div className='shop-list'>
                    <div className='shop-list-wrapper'>
                        <ul className='shop-list__list_cart'>
                            <div>Итого</div>
                            <div>Товаров {numberOfGoods}</div>
                            <div>Сумма к оплате {sumOfMoney} рублей</div>
                        </ul>
                    </div>
                </div>}


                <div className='shop-list'>
                    <div className='shop-list-wrapper'>
                        <button
                            /* disabled={cartList.length === 0 ? true : false} */
                            disabled={!name || !tel || !address}
                            type='submit'>
                                Отправить заказ
                        </button>
                    </div>
                </div>

            </form>

        </>
    );
};

export default CartList;
