import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function PersonalAccount({ logOut, loggedIn }) {

    const currentUser = useContext(CurrentUserContext);

    const [personalOrders, setPersonalOrders] = useState([]);

    useEffect(() => {

        const m = localStorage.getItem('orderHistory')

        if (!m) {
            localStorage.setItem('orderHistory', JSON.stringify(personalOrders))

        }

        setPersonalOrders(JSON.parse(m))


    }, [])

    return (
        <>
            {loggedIn && <div className='nav'>
                <div className='nav__container nav__container_auth'>

                    <h3 className='nav__h3_lk'>Мой профиль</h3>
                    <p>Имя: {currentUser.username}</p>
                    <p>Почта: {currentUser.email}</p>


                    <table>
                        <thead>
                            <tr className='personal-orders'>
                                <th className='personal-orders' colSpan='6'>Заказы</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td className='personal-orders__item personal-orders__item_bold'>Дата</td>
                                <td className='personal-orders__item personal-orders__item_bold'>Имя</td>
                                <td className='personal-orders__item personal-orders__item_bold'>Адрес</td>
                                <td className='personal-orders__item personal-orders__item_bold'>Телефон</td>
                                <td className='personal-orders__item personal-orders__item_bold'>Позиции</td>
                                <td className='personal-orders__item personal-orders__item_bold'>Сумма</td>
                            </tr>

                            {personalOrders.map((order) => {
                                return (
                                    <tr key={order.id} className='personal-orders'>
                                        <td className='personal-orders__item'>{order.date} </td>
                                        <td className='personal-orders__item'>{order.name} </td>
                                        <td className='personal-orders__item'>{order.address} </td>
                                        <td className='personal-orders__item'>{order.tel} </td>
                                        <td className='personal-orders__item'>{order.positions.map(i => `${i.name} (${i.count}) `)} </td>
                                        <td className='personal-orders__item'>{order.sumOfMoney} </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>

                    {/* <button onClick={logOut} className='promo-item__btn'>Выйти</button> */}

                </div>

            </div>}
        </>
    )
}

export default PersonalAccount;