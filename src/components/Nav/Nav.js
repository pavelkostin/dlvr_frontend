import cartImg from '../../images/cart.svg';
import { Link, useLocation} from 'react-router-dom';

function Nav() {

    const location = useLocation();
    const isLocationHome = location.pathname === '/';
    const isLocationGifts = location.pathname === '/gifts';
    const isLocationPromo = location.pathname === '/promo';
    const isLocationAbout = location.pathname === '/about';
    const isLocationDelivery = location.pathname === '/delivery';

    return (
        <div className='nav'>
            <div className='nav__container'>
                <ul className='nav__cats-container'>
                    <Link to='/' className={`nav__cat ${isLocationHome ? 'nav__cat_active' : ''}`}>Наше меню</Link>
                    <Link to='/gifts' className={`nav__cat ${isLocationGifts ? 'nav__cat_active' : ''}`}>Подарки</Link>
                    <Link to='/promo' className={`nav__cat ${isLocationPromo ? 'nav__cat_active' : ''}`}>Акции</Link>
                    <Link to='/about' className={`nav__cat ${isLocationAbout ? 'nav__cat_active' : ''}`} >О нас</Link>
                    <Link to='/delivery' className={`nav__cat ${isLocationDelivery ? 'nav__cat_active' : ''}`}>Доставка и оплата</Link>
                </ul>
                <Link to='/cart' className='nav__cat-cart'>
                    <img src={cartImg} alt='cart' className='nav__nav__cat-cart-img' />
                    <p className='nav__cat-cart-para'>Корзина</p>
                </Link>
            </div>
        </div>

    )
}

export default Nav;