import { Link } from 'react-router-dom';

function PromoItemPage() {

    const a = JSON.parse(localStorage.getItem('promo'));

    return (
        <div className='promo-item-page'>
            <div className='promo-item-page__wrapper'>
                <Link to='/promo' className='promo-item-page__button'>Назад</Link>
                <h1>{a.name}</h1>
                <img
                    className='promo-item__img_page'
                    src={a.link}
                    alt={a.name}
                />
                <p>{a.text}</p>
            </div>

        </div>
    )
}

export default PromoItemPage;