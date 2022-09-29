import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { phones } from '../../phones';
import CartInfo from '../CartInfo/CartInfo';
import ShopList from '../ShopList/ShopList';
import CartList from '../CartList/CartList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Main from '../Main/Main';

function App() {

  const location = useLocation();
  const isLocationCart = location.pathname === '/cart-list'

  const [showPopupState, setShowPopupState] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [cartList, setCartList] = useState([]);


  function showHidePhone() {
    if (showPhone) {
      setShowPhone(false);
    } else {
      setShowPhone(true);
    }
  }

  function showHidePopup() {
    if (showPopupState) {
      setShowPopupState(false);
    } else {
      setShowPopupState(true);
    }
  }

  function updateCartList(cartList, newPhone, index) {

    if (newPhone.count === 0) {
      return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
    }

    if (index === -1) {
      return [...cartList, newPhone]
    }

    return [...cartList.slice(0, index), newPhone, ...cartList.slice(index + 1)]
  }

  function createPhoneInCart(getPhone, phoneInCart, quantity) {
    if (phoneInCart) {
      return {
        ...phoneInCart,
        totalPrice: phoneInCart.totalPrice + quantity * getPhone.price,
        count: phoneInCart.count + quantity
      }
    }

    return {
      id: getPhone.id,
      name: getPhone.name,
      url: getPhone.url,
      totalPrice: getPhone.price,
      count: 1
    }
  }

  function addPhoneInCart(item) {

    const phoneInPhones = phones.find(i => i.id === item.id);
    const phoneIndexInCartList = cartList.findIndex(i => i.id === item.id);
    const newPhoneInCartList = cartList[phoneIndexInCartList];
    const createPhone = createPhoneInCart(phoneInPhones, newPhoneInCartList, 1);
    const updatedCartList = updateCartList(cartList, createPhone, phoneIndexInCartList)
    setCartList(updatedCartList);
  }

  function deletePhoneFromCart(item) {
    const phoneInPhones = phones.find(i => i.id === item.id);
    const phoneIndexInCartList = cartList.findIndex(i => i.id === item.id);
    const newPhoneInCartList = cartList[phoneIndexInCartList];

    const createPhone = createPhoneInCart(phoneInPhones, newPhoneInCartList, -1);
    const updatedCartList = updateCartList(cartList, createPhone, phoneIndexInCartList)
    setCartList(updatedCartList);
  }

  function removeItemFromCartList(item) {
    const phoneInPhones = phones.find(i => i.id === item.id);
    const phoneIndexInCartList = cartList.findIndex(i => i.id === item.id);
    const newPhoneInCartList = cartList[phoneIndexInCartList];

    const createPhone = createPhoneInCart(phoneInPhones, newPhoneInCartList, -newPhoneInCartList.count);
    const updatedCartList = updateCartList(cartList, createPhone, phoneIndexInCartList)
    setCartList(updatedCartList);
  }

  function sendOrder() {
    console.log(cartList.length);
    setCartList([])
    alert('Ваш заказ отправлен. Ждите звонка для подтверждения заказа в течение 10 минут.')
    
  }

  return (
    <div className='App'>
      <div className='page__container'>
        <Header
          onShowPhone={showHidePhone}
          onShowPopup={showHidePopup}
          showPhoneState={showPhone}
        />
        {!isLocationCart && cartList.length !== 0 && <CartInfo cartList={cartList}/>}
        <Main />

        <Routes>
          <Route exact path='/'
            element={<ShopList
              phones={phones}
              addPhoneInCart={addPhoneInCart}
              deletePhoneFromCart={deletePhoneFromCart}
              cartList={cartList}
            />} />
          <Route exact path='/cart-list'
            element={<CartList
              cartList={cartList}
              deletePhoneFromCart={deletePhoneFromCart}
              addPhoneInCart={addPhoneInCart}
              removeItemFromCartList={removeItemFromCartList}
              sendOrder={sendOrder}
              
            />} />

        </Routes>
      </div>
      <Footer />
      <Popup showPopupState={showPopupState} />
    </div>
  );
}

export default App;
