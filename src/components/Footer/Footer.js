import vkImg from '../../images/footer/vk.svg';
import appStoreImg from '../../images/footer/appstore.svg';
import gPlayImg from '../../images/footer/gplay.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__subcontainer'>
                    <p className='footer__container-para'>Tокирим 2022</p>
                    <div className='footer__sub-container'>
                        <div className='footer__links'>
                            <a className='footer__link'
                                href='https://vk.com/tokirim_kirzhach'
                                rel='noreferrer'
                                target='_blank'>
                                <img src={vkImg} className='footer__socials' alt='vk' />
                            </a>
                            <a className='footer__link'
                                href='https://apps.apple.com/ru/app/токирим/id1596420209'
                                rel='noreferrer'
                                target='_blank'>
                                <img src={appStoreImg} className='footer__socials' alt='appstore' />
                            </a>
                            <a className='footer__link'
                                href='https://play.google.com/store/apps/details?id=io.zenky.tokirim&hl=ru&gl=US'
                                rel='noreferrer'
                                target='_blank'>
                                <img src={gPlayImg} className='footer__socials' alt='gplay' />
                            </a>
                        </div>
                    </div>
                </div>
                <ul className='footer__agreement'>
                    <li className='footer__politics'>Политика конфиденциальности</li>
                    <li className='footer__politics'>Пользовательское соглашение</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;