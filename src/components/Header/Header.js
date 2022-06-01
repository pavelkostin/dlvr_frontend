import phoneImg from '../../images/phone1.svg';
import accountImg from '../../images/account-img.svg';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Header({ onShowPopup }) {
    const location = useLocation();
    const isLocationHome = location.pathname === '/';

    return (
        <header className='header'>
            <div className='header-wrapper'>
                <Link to='/' className='header-logo' />
                <div className='header-container'>
                    <ul className='header-contacts-container'>
                        <li className='li_drop'>
                            <img src={phoneImg} className='header-contacts-img header-contacts-img_phone' alt='tel_img' />
                            <ul className='header-contacts-container__submenu'>
                                <li className='header-contacts-item'>
                                    <p className='header-contacts-item'>
                                        <a className='header-contacts-item' href='tel:+79999999999'>+7(999)9999999</a>
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
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