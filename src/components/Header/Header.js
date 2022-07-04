import phoneImg from '../../images/phone1.svg';
import accountImg from '../../images/account-img.svg';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import PopupPhone from '../PopupPhone/PopupPhone';
import Cart from '../Cart/Cart';

function Header({ onShowPopup, onShowPhone, showPhoneState, itemsCounter }) {
    const location = useLocation();
    const isLocationHome = location.pathname === '/';
    const isLocationCart = location.pathname === '/cart';
    

    return (
        <header className='header'>
            
            <div className='header-wrapper'>
            
                <Link to='/' className='header-logo' />
                <div className='header-container'>
                {!isLocationCart && <Cart itemsCounter={itemsCounter}/>}
                    <div className='header-phone-container'>
                        <div className='header-phone'>
                            <img
                                onClick={onShowPhone}
                                className='header-phone-img'
                                src={phoneImg}
                                alt='phone' />
                        </div>
                        {showPhoneState && <PopupPhone />}
                    </div>
                    <div className='header-contacts header-contacts_hidden'>
                        <img src={accountImg} className='header-contacts-img header-contacts-img_hidden' alt='tel_img' />
                        <p className='header-contacts-item header-contacts-item_hidden'>Войти</p>
                    </div>
                    <div onClick={onShowPopup} className='header-contacts header-contacts_visible'>
                        <img src={accountImg} className='header-contacts-img header-contacts-img_hidden' alt='tel_img' />
                        <p className='header-contacts-item header-contacts-item_hidden'>Войти</p>
                    </div>
                </div>
            </div>
            {!isLocationHome ? <Nav /> : ''}
            
        </header>
    )
}

export default Header;