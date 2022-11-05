import close from '../../../images/close.svg';


function PopupItem({ onDeletePhoneInCart, onAddPhoneInCart, number, clicked, phone, hidePopupItem, showPopupItemState }) {

    const { name, description, price, url, id, weight } = phone;

    return (
        <>
            <section className={`popup ${showPopupItemState ? 'popup_visible' : ''}`}>
                <div className='popup-item__container'>

                    <img src={close} onClick={() => { hidePopupItem() }} className='popup__close' alt='close_btn' />
                    <img className='popup-item__img' src={url} alt={name} />

                    <div className='popup-item__sub-container'>

                        <div className='popup-item__sub-sub-container'>
                            <h3 className='popup-item__h3'>{name}</h3>
                            
                            <p className='popup-item__p'>{weight} гр.</p>
                            <p className='popup-item__p'>{description} </p>
                        </div>



                        {/* {clicked && <h3 className='popup-item__h3'>{price} ₽</h3>} */}

                        <div className='popup-item__sub-sub-container popup-item__sub-sub-container-row'>

                            {clicked && <button className='promo-item__btn promo-item__btn_popup-item ' onClick={() => onAddPhoneInCart()}>+</button>}
                            
                            {clicked &&<div className={`promo-item__counter promo-item__btn_popup-item  ${clicked ? 'promo-item__btn_clicked' : ''}`}>{number}</div>}

                            {clicked && <button className='promo-item__btn promo-item__btn_popup-item ' onClick={() => onDeletePhoneInCart()}>-</button>}

                        </div>
                        {!clicked && <button
                            className={`promo-item__btn promo-item__btn_popup-item  ${clicked ? 'promo-item__btn_clicked' : ''}`}
                            disabled={clicked ? true : false}
                            onClick={() => { onAddPhoneInCart() }}
                        >{`${clicked ? 'в корзине' : `в корзину за ${price} рублей`}`}
                        </button>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopupItem;


