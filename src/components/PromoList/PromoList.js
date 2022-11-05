import React from 'react';
import PromoItem from '../PromoList/PromoItem/PromoItem';



const PromoList = ({ promo }) => {



    return (
        <>

            <section className='shop-list'>
                <div className='shop-list-wrapper'>
                    <ul className='categories-list_promo'>
                        {

                            promo.map((item) => {
                                return (
                                    <li key={item.id}
                                        className='shop-list__item'
                                    >
                                        <PromoItem
                                            item={item}

                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>

            </section>
        </>
    )
};

export default PromoList;
