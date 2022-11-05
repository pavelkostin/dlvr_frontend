import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { phones } from '../../phones';
import { promo } from '../../promo';
import CartInfo from '../CartInfo/CartInfo';
import ShopList from '../ShopList/ShopList';
import CartList from '../CartList/CartList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Main from '../Main/Main';
import PromoList from '../PromoList/PromoList';
import About from '../About/About';
import Delivery from '../Delivery/Delivery';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import PersonalAccount from '../PersonalAccount/PersonalAccount';
import * as auth from '../../Auth/Auth';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const isLocationCart = location.pathname === '/cart-list';

  const [showPopupState, setShowPopupState] = useState(false);
  
  const [showPhone, setShowPhone] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      // здесь будем проверять токен
      if (jwt) {
        auth.getContent(jwt)
          .then((res) => {
            if (res) {
              setCurrentUser(res);
              setLoggedIn(true)
            }
          })
      }
    }
  }, [loggedIn])

  function hidePopup() {
    setShowPopupState(false);
    
  }

  function handleLogin() {
    setLoggedIn(true)
  }

  function logOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    navigate('/sign-in');
  }

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
      count: 1,

      owner: currentUser.username,
      email: currentUser.email

    }
  }

  function addPhoneInCart(item) {

    const phoneInPhones = phones.find(i => i.id === item.id);
    const phoneIndexInCartList = cartList.findIndex(i => i.id === item.id);
    const newPhoneInCartList = cartList[phoneIndexInCartList];
    const createPhone = createPhoneInCart(phoneInPhones, newPhoneInCartList, 1);
    const updatedCartList = updateCartList(cartList, createPhone, phoneIndexInCartList)
    setCartList(updatedCartList);

    /* setOrdersHistory(updatedCartList); */

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
    setShowPopupState(true)
    navigate('/my-account')
    setCartList([])
  }




  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>

        <div className='page__container'>

          <Popup
            hidePopup={hidePopup}
            showPopupState={showPopupState} />



          <Header
            logOut={logOut}
            onShowPhone={showHidePhone}
            onShowPopup={showHidePopup}
            showPhoneState={showPhone}
            loggedIn={loggedIn}
          />

          {!isLocationCart && cartList.length !== 0 && <CartInfo cartList={cartList} />}
          <Main />

          <Routes>
            <Route exact path='/my-account'
              element={!loggedIn ? <Navigate to='/' /> : <PersonalAccount
                currentUser={currentUser}
                logOut={logOut}
                loggedIn={loggedIn}
              />}
            />

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

            <Route exact path='/promo'
              element={<PromoList
                promo={promo}
              />} />

            <Route exact path='/about'
              element={<About
              />} />

            <Route exact path='/delivery'
              element={<Delivery
              />} />

            <Route exact path='/sign-in'
              element={<Login
                handleLogin={handleLogin}
              />} />

            <Route exact path='/sign-up'
              element={<Registration
              />} />

          </Routes>
        </div>
        <Footer />

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
