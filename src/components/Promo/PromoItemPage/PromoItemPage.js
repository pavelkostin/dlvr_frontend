import { Link } from 'react-router-dom';

function PromoItemPage() {

    const a = JSON.parse(localStorage.getItem('promo'));

    return (
        <div className='promo-item-page'>
            <div className='promo-item-page__wrapper'>
                <Link to='/promo' className='promo-item-page__button'>Назад</Link>
                <h1 className='category__h3 category__h3_black'>{a.name}</h1>
                
                <div className='promo-item-page__container'>
                <img
                    className='promo-item__img_page'
                    src={a.link}
                    alt={a.name}
                />
                <p className='promo-item__para'>{a.text}</p>
                </div>
                

            </div>
        </div>
    )
}

export default PromoItemPage;