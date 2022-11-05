import React from 'react';
import phoneImg from '../../images/call.png';
import accountImg from '../../images/account-img.svg';
import logout from '../../images/logout.png';
import { Link, useLocation } from 'react-router-dom';

import PopupPhone from '../PopupPhone/PopupPhone';


function Header({ logOut, onShowPhone, showPhoneState, loggedIn }) {

    const location = useLocation();
    const isLocationPerson = location.pathname === '/my-account'

    return (
        <header className='header'>

            <div className='header-wrapper'>

                <Link to='/' className='header-logo' />
                <div className='header-container'>

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

                    {loggedIn && !isLocationPerson &&
                        <Link to='/my-account' className='cart-info__link cart-info__link_personal'>
                            {/* <img src={accountImg} className='header-contacts-img' alt='tel_img' /> */}
                            <div className='cart-info__p'>Личный кабинет</div>
                        </Link>
                    }

                    {loggedIn && isLocationPerson &&
                        <button onClick={logOut} className='cart-info__link cart-info__link_personal'>
                            <img src={logout} className='header-contacts-img' alt='logout' />
                            <div className='cart-info__p'>Выйти</div>
                        </button>
                    }

                    {!loggedIn &&
                        <Link to='/sign-in' className='cart-info__link cart-info__link_personal'>
                            <img src={accountImg} className='header-contacts-img' alt='tel_img' />
                            <div className='cart-info__p'>Войти</div>
                        </Link>
                    }




                </div>
            </div>


        </header>
    )
}

export default Header;