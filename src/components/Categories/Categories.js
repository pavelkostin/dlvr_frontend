import {CategoriesList} from '../../assets/vars';
import Category from './Category/Category';


function Categories({itemsCounter}) {
    return (
        <div className='categories'>
            <ul className='categories-list'>
                {CategoriesList.map((item) => {
                    return (
                        <Category
                            key={item._id}
                            item={item}
                        />
                        
                    )
                    
                })}
            </ul>
            
        </div>
    )
}

export default Categories;