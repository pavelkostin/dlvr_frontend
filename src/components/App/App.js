import React, { useState } from 'react';
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

function App() {

  const [showPopupState, setShowPopupState] = useState(false);

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

  return (
      <div className='App'>
        <Header onShowPopup={showHidePopup} />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/gifts' element={<Gifts />} />
          <Route exact path='/promo' element={<Promo setPromo={setPromo} />} />
          <Route exact path='/about' element={<AboutUs />} />
          <Route exact path='/delivery' element={<Delivery />} />
          <Route exact path='/cart' element={<CartPage />} />
          <Route
            exact path='/promo-item-page'
            element={<PromoItemPage />}
          />
        </Routes>
        <Footer />
        <Popup showPopupState={showPopupState} />
      </div>
  );
}

export default App;
