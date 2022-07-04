import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Product({ product, setProduct, addToCart }) {

    const [clicked, setClicked] = useState(false);
    const b = JSON.parse(localStorage.getItem('product'));

    useEffect(() => {
        const a = localStorage.getItem('cartList');
        const c = JSON.parse(a);
        const d = c.some(element => element._id === product._id);
        setClicked(d);
    }, [product._id])

    function checkCart() {
        const a = localStorage.getItem('cartList');
        const c = JSON.parse(a)
        const d = c.some(element => element._id === product._id);
        setClicked(d);
    }

    function onAddToCart() {
        addToCart(product);
        setClicked(true);
        checkCart();
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
                        onClick={() => { onAddToCart() }}>
                            
                            {`${clicked ? 'в корзине' : 'в корзину'}`}
                    </button>
                </div>


            </div>
        </>
    )
}

export default Product;