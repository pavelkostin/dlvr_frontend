import searchImg from '../../images/searchImg.svg';


function Search() {
    return (
        <div className='search'>
            <div className='search__container'>
                <img src={searchImg} className='search__img' alt='search' />
                <input className='search__input' placeholder='Поиск по товарам'>
                </input>
            </div>
        </div>
    )
}

export default Search;