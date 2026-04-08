import footerLogo from '../../assets/images/footer/footerLogo.svg'
import './Footer.scss'

function Footer() {
    return (<>
        <footer className='footer'>
            <img src={footerLogo} alt="logo noirci de Kasa" className='footer__logo' />
            <p className='footer__text'>© 2020 Kasa. All Rights reserved</p>
        </footer>
    </>)
}

export default Footer