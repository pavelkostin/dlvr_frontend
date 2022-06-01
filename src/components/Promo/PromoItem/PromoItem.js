import { Link} from 'react-router-dom';

function PromoItem({ item, setPromo }) {

    return (
        <>
            <div className='promo-item'>
                <Link to='/promo-item-page'>
                    <img
                        onClick={()=> setPromo(item)}
                        className='promo-item__img'
                        src={item.link}
                        alt={item.name}
                    />
                </Link>
                <h3 className='promo-item__h3'>{item.name}</h3>
                <p className='promo-item__para'>{item.text}</p>
            </div>
        </>
    )
}

export default PromoItem;