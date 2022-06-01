import React from 'react';
import { PromoList } from '../../assets/vars';
import PromoItem from '../Promo/PromoItem/PromoItem';


function Promo({setPromo}) {

    return (
        
        <div className='promo'>
            <div className='promo__wrapper'>
                <ul className='categories-list_promo'>
                    {PromoList.map((item) => {
                        return (
                            <PromoItem
                                key={item._id}
                                item={item}
                                setPromo={setPromo}
                            />
                        )
                    })}
                </ul>
            </div>

        </div>
        
    )
}

export default Promo;