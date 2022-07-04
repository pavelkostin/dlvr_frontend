import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Gifts from '../Gifts/Gifts';
import Promo from '../Promo/Promo';
import Delivery from '../Delivery/Delivery';
import CartPage from '../CartPage/CartPage';
import PromoItemPage from '../Promo/PromoItemPage/PromoItemPage';
import GoodsList from '../GoodsList/GoodsList';
import Product from '../Product/Product';
import ProductPage from '../ProductPage/ProductPage';

function App() {

  const [showPopupState, setShowPopupState] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [itemsCounter, setItemsCounter] = useState(0);


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

  function setPromo(promo) {
    localStorage.setItem('promo', JSON.stringify(promo))
  }


  useEffect(() => {
    const a = localStorage.getItem('product')
    if (!a) {
      localStorage.setItem('product', JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    const cartFromStorage = localStorage.getItem('cartList')

    if (!cartFromStorage) {
      localStorage.setItem('cartList', JSON.stringify([]))
    }
    const b = JSON.parse(cartFromStorage);
    
    setCartList(b);
    setItemsCounter(b.length);
  }, [])


  function setProduct(product) {
    localStorage.setItem('product', JSON.stringify(product));
  }


  function addToCart(item) {
    cartList.push(item);
    setCartList(cartList);
    setItemsCounter(cartList.length);
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }

  function clearCart() {
    localStorage.removeItem('cartList');
    setCartList([]);
    setItemsCounter(0);
  }

  function removePosition(a) {
    localStorage.setItem('cartList', JSON.stringify([...cartList.slice(0, a), ...cartList.slice(a + 1)]));
    setCartList([...cartList.slice(0, a), ...cartList.slice(a + 1)]);
    setItemsCounter(cartList.length - 1);
  }



  return (
    <div className='App'>
      <div className='page__container'>
        <Header
          onShowPhone={showHidePhone}
          onShowPopup={showHidePopup}
          showPhoneState={showPhone}
          itemsCounter={itemsCounter}
        />

        <Routes>
          <Route exact path='/' element={<Main itemsCounter={itemsCounter} />} />
          <Route exact path='/gifts' element={<Gifts />} />
          <Route exact path='/about' element={<AboutUs />} />
          <Route exact path='/delivery' element={<Delivery />} />
          <Route exact path='/cart'
            element={<CartPage
              cartList={cartList}
              clearCart={clearCart}
              removePosition={removePosition}
            />} />
          <Route exact path='/:category'
            element={<GoodsList
              addToCart={addToCart}
              setProduct={setProduct}
              itemsCounter={itemsCounter}
            />}
          />
          <Route exact path='/:product' element={<Product />} />
          <Route
            exact path='/:category/:product'
            element={<ProductPage
              addToCart={addToCart}
              itemsCounter={itemsCounter}
            />}
          />
          <Route exact path='/promo'
            element={<Promo setPromo={setPromo} />} />
          <Route
            exact path='/promo/:name'
            element={<PromoItemPage />}
          />
        </Routes>
      </div>
      <Footer />

      <Popup showPopupState={showPopupState} />
    </div>
  );
}

export default App;
