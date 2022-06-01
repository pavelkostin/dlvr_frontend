

function Category({ item }) {
    return (
        <div className='category'>
            <img className='category__img' src={item.link} alt={item.name} />
            <h3 className='category__h3'>{item.name}</h3>
        </div>
    )
}

export default Category;