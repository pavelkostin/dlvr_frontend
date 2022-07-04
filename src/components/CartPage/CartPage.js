import CartItem from '../CartPage/CartItem/CartItem';

function CartPage({ cartList, clearCart, removePosition }) {

    const countedSumm = cartList.reduce((sum, current) => sum = sum + current.prize, 0);

/*     function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    } */

    function onClearCart() {
        clearCart();
        localStorage.setItem('cartList', JSON.stringify([]))
    }



    return (
        <div className='promo'>
            <div className='promo__wrapper'>
                <h3>Товары</h3>
                {cartList.map((item, index) => {
                    return (
                        <CartItem
                            /* key={randomNumber(1, 10000)} */
                            key={index}
                            index={index}
                            item={item}
                            onRemovePosition={removePosition}
                        />
                    )
                })}
                <div className='cart-item cart-item__summ'>
                    <h3>Сумма к оплате</h3>
                    <h3>{countedSumm}</h3>
                </div>
                <button className='promo__btn-clear' onClick={() => { onClearCart() }}>Очистить корзину</button>
                <button className='promo__btn-confirm'>Отправить заказ</button>
                
            </div>

            
        </div>
    )
}

export default CartPage;