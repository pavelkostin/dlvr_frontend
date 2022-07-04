import { Link } from 'react-router-dom';

function PromoItem({ item, setPromo }) {



    return (
        <>
            <div className='promo-item'>
                <h3 className='category__h3'>{item.name}</h3>
                <Link to={`/promo/${item.name}`}>
                    <img
                        onClick={() => setPromo(item)}
                        className='promo-item__img'
                        src={item.link}
                        alt={item.name}
                    />
                </Link>
                <p className='promo-item__para'>{item.text}</p>
            </div>
        </>
    )
}

export default PromoItem;