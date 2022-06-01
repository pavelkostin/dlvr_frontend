
function PromoContent({ item }) {
    return (
        <div className='promo-item'>
            <img className='promo-item__img'
                src={item.link}
                alt={item.name} />
            <h3 className='promo-item__h3'>{item.name}</h3>
            <p className='promo-item__para'>{item.text}</p>
        </div>
    )
}

export default PromoContent;