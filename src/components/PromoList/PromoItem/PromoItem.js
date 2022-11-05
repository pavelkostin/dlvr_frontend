import React, { useEffect, useState } from 'react';

function PromoItem({ item }) {

    const { name, description, url } = item;

    return (
        <>
            <div className='promo-item'>
                <div className='promo-item__container promo-item__container_row'>
                    <h3 className='promo-item__h3'>{name}</h3>
                    
                </div>
                <div className='promo-item__container promo-item__container_row'>
                    <p className='promo-item__para'>{description}</p>
                    
                </div>
                <div className='promo-item__container'>
                    <img className='promo-item__img promo-item__img_promo' src={url} alt={name}
                    />
                </div>
            </div>
        </>
    )
}

export default PromoItem;