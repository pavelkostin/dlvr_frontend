import close from '../../images/close.svg';


function Popup({ hidePopup, showPopupState }) {



    return (
        <>
            <section className={`popup ${showPopupState ? 'popup_visible' : ''}`}>
                <div className='popup__container'>
                    <img src={close} onClick={() => { hidePopup() }} className='popup__close' alt='close_btn' />
                    <p>Ваш заказ отправлен. Ожидайте звонка оператора в течение 10 минут.</p>
                </div>
            </section>
        </>
    )
}

export default Popup;