import React from 'react';
import Product from '../Product/Product';


const ShopList = ({ phones, addPhoneInCart, cartList, deletePhoneFromCart }) => {

  
  const [filter, setFilter] = React.useState('rolls');
  const [listOfGoods, setListOfGoods] = React.useState(phones);

  React.useEffect(() => {
    setListOfGoods(phones.filter(item => item.category === filter))
  }, [phones, filter]);

  const isFilterRoll = 'rolls';
  const isFilterPizza = 'pizza';



  return (
    <>
      <div>
        <div className='nav__container'>
          <ul className='nav__cats-container'>
            <div onClick={() => { setFilter(isFilterRoll) }} className={`nav__cat ${filter === isFilterRoll ? 'nav__cat_active' : ''}`}>Роллы</div>
            <div onClick={() => { setFilter(isFilterPizza) }} className={`nav__cat ${filter === isFilterPizza ? 'nav__cat_active' : ''}`}>Пицца</div>

          </ul>
        </div>
      </div>

      <section className='shop-list'>
        <div className='shop-list-wrapper'>
          <ul className='categories-list_promo'>
            {

              listOfGoods.map((phone) => {
                return (
                  <li key={phone.id}
                    className='shop-list__item'
                  >
                    <Product
                      phone={phone}
                      addPhoneInCart={addPhoneInCart}
                      deletePhoneFromCart={deletePhoneFromCart}
                      cartList={cartList}
                      
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

export default ShopList;
