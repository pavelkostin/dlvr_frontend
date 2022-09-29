import { Link, useLocation} from 'react-router-dom';
function NavMenu({phones}) {

    const location = useLocation();
    const isFilterRoll = location.pathname === '/';
    const isFilterPizza = location.pathname === '/gifts';



    return (
        <div>
            <div className='nav__container'>
                <ul className='nav__cats-container'>
                    <Link to='/' className={`nav__cat ${isFilterRoll ? 'nav__cat_active' : ''}`}>Роллы</Link>
                    <Link to='/gifts' className={`nav__cat ${isFilterPizza ? 'nav__cat_active' : ''}`}>Пицца</Link>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu;