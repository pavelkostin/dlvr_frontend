import { Link } from 'react-router-dom';


function ProductPage({ addToCart, itemsCounter }) {

    const b = JSON.parse(localStorage.getItem('product'));

    return (
        <div className='promo-item-page'>
            
            <div className='promo-item-page__wrapper'>
                <Link to={`/${b.category}`}
                    className='promo-item-page__button'>Назад</Link>
                <div className='promo-item__container'>
                
                    <h3 className='category__h3 category__h3_black'>{b.name}</h3>
                    <div className='category__h3 category__h3_black'>{b.weight} гр.</div>
                </div>
                
                <div className='promo-item-page__container'>
                    
                    <img
                        className='promo-item__img_page'
                        src={b.link}
                        alt={b.name}
                    />
                    <p className='promo-item__para'>{b.text}</p>
                </div>
                <div className='promo-item__container'>
                    <div className='promo-item__para_black-bold'>{b.prize} ₽</div>
                    <button className='promo-item__btn promo-item__btn_ppage' onClick={() => { addToCart(b) }}>в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;