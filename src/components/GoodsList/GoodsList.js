import { useLocation, Link } from 'react-router-dom';
import { Goods } from '../../assets/vars';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

function GoodsList({ setProduct, addToCart, itemsCounter }) {

    const location = useLocation();

    const isLocationColdRolls = location.pathname === '/cold';
    const isLocationPizza = location.pathname === '/pizza';

    const isLocationWok = location.pathname === '/wok';
    const isLocationDrinks = location.pathname === '/drinks';
    const isLocationAdds = location.pathname === '/adds';
    const isLocationNew = location.pathname === '/news';

    let coldRolls = Goods.filter(product =>
        product.nameCategoryRu === 'холодные')

    let pizza = Goods.filter(product =>
        product.nameCategoryRu === 'пицца')

    let wok = Goods.filter(product =>
        product.nameCategoryRu === 'Вок')

    let drinks = Goods.filter(product =>
        product.nameCategoryRu === 'Напитки')

    let adds = Goods.filter(product =>
        product.nameCategoryRu === 'Дополнительно')

    let news = Goods.filter(product =>
        product.nameCategoryRu === 'Новинки')

    let a = null;
    let categoryName = null;

    if (isLocationColdRolls) {
        a = coldRolls
        categoryName = 'Холодные роллы'
    } else if (isLocationPizza) {
        a = pizza
        categoryName = 'Пицца'
    }
    else if (isLocationWok) {
        a = wok
        categoryName = 'Вок'
    }
    else if (isLocationDrinks) {
        a = drinks
        categoryName = 'Напитки'
    }
    else if (isLocationAdds) {
        a = adds
        categoryName = 'Дополнительно'
    }
    else if (isLocationNew) {
        a = news
        categoryName = 'Новинки'
    }


    return (

        <div className='promo'>

            <div className='nav__container nav__container_cat'>
                <Link to='/' className='promo-item-page__button'>Назад</Link>
                <h3 className='category__h3 category__h3_grey'>{categoryName}</h3>
                
            </div>
            <div className='nav__container'>
                <ul className='categories-list_promo'>
                    {a.map((product) => {
                        return (
                            <Product
                                key={product._id}
                                product={product}
                                setProduct={setProduct}
                                addToCart={addToCart}
                                
                            />
                        )
                    })}
                </ul>
                
            </div>
            
        </div>
    )
}

export default GoodsList;