import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/LOGO.svg'
import './Header.scss'

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo de l'entreprise Kasa" />
                <div className='navbar'>
                    <NavLink to="/" className='navbar__link'>Accueil</NavLink>
                    <NavLink to="/about" className='navbar__link'>A propos</NavLink>
                </div>
            </header>
        </>

    )
}

export default Header