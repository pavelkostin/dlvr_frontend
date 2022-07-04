import { Link } from 'react-router-dom';


function Category({ item }) {
    return (
        <div className='category'>
            <Link className='link' to={`/${item.name}`}>
                <img className='category__img ' src={item.link} alt={item.name} />
                <h3 className='category__h3'>{item.nameRu}</h3>
            </Link>
            
        </div>
        
    )
}

export default Category;