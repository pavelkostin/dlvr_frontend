function Delivery() {
    return (
        <div className='about-us'>
            <div className='about-us__wrapper'>
                <h2 className='about-us__header'>Доставка и оплата</h2>
                <h3 className='about-us__header'>Условия доставки</h3>
                <p className='about-us__para'>Бесплатная доставка по городу при заказе на сумму от 500₽</p>
                <p className='about-us__para'>Стоимость доставки уточняйте у оператора при подтверждении заказа</p>
                <h3 className='about-us__header'>Зоны доставки</h3>
                <iframe
                className='iframe-map'
                title='location'
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac952a5299b93708366ce6f75fbe5aabd314f6e4725df53f5e3e514b30bf3752d&amp;source=constructor"
                width="764" height="594" frameBorder="0"></iframe>
            </div>
        </div>

    )
}

export default Delivery;