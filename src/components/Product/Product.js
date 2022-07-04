import { Link } from 'react-router-dom';

function Product({ product, setProduct, addToCart }) {

    const b = JSON.parse(localStorage.getItem('product'));

    function onAddToCart() {
        addToCart(product);
    }


    return (
        <>
            <div className='promo-item'>
                <div className='promo-item__container'>
                    <h3 className='category__h3 category__h3_black'>{product.name}</h3>
                    <div className='category__h3 category__h3_black'>{product.weight} гр.</div>
                </div>
                <Link to={`/${b.category}/${b.name}`}>
                    <img
                        onClick={() => setProduct(product)}
                        className='promo-item__img'
                        src={product.link}
                        alt={product.name}
                    />
                </Link>
                <p className='promo-item__para'>{product.text}</p>
                <div className='promo-item__container'>
                    <div className='promo-item__para_black-bold'>{product.prize} ₽</div>
                    <button
                        className='promo-item__btn'
                        onClick={() => { onAddToCart() }}>в корзину
                    </button>
                </div>


            </div>
        </>
    )
}

export default Product;