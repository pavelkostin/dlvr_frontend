

const Delivery = () => {
    return (
        <>
            <section className='shop-list'>
                <div className='shop-list-wrapper shop-list-wrapper_about'>
                    <h1>Карта доставки</h1>
                    <iframe title='map' src='https://yandex.ru/map-widget/v1/?um=constructor%3A66db205525a323426dfe42d9ce33cf0cb426342aee762b3923a29cdea57e0719&amp;source=constructor'
                    width='100%' height='500' frameBorder='0'></iframe>
                </div>
            </section>
        </>
    )
}

export default Delivery;