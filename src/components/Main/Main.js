import { useLocation } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Info from '../Info/Info';
import Nav from '../Nav/Nav';
import imageCarousel_1 from '../../images/for_slider/pexels-valeria-boltneva-1148084.jpg'
import imageCarousel_5 from '../../images/for_slider/pose-eyes-fur-cat.jpg'
import imageCarousel_6 from '../../images/for_slider/1621870607_20-oir_mobi-p-tolstaya-morda-kota-zhivotnie-krasivo-foto-27.jpg'

function Main() {

    const location = useLocation();
    const isLocationMain = location.pathname === '/'

    
    return (
        <>
            {isLocationMain && <Carousel>
                <img src={imageCarousel_1} alt='image_1' />
                <img src={imageCarousel_5} alt='image_1' />
                <img src={imageCarousel_6} alt='image_1' />
            </Carousel>}
            {isLocationMain &&<Info />}
            <Nav />

            
        </>
    )
}

export default Main;