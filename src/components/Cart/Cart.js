import cartImg from '../../images/cart.svg'
import { Link } from 'react-router-dom';

function Cart({itemsCounter}) {

    return (
        <>
        <Link to='/cart' className='cart-fixed'>
            <div className='cart-fixed__container'>
            <img className='cart-fixed__img' src={cartImg} alt='cart' />
            </div>
            <div className='cart-fixed__counter'>{itemsCounter}</div>
        </Link>
        
        </>
    )
}

export default Cart;