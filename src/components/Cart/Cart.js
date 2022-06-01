import cartImg from '../../images/cart.svg'
import { Link, useLocation} from 'react-router-dom';

function Cart() {
    return (
        <Link to='/cart' className='cart-fixed'>
            <img className='cart-fixed__img' src={cartImg} alt='cart' />
        </Link>
    )
}

export default Cart;