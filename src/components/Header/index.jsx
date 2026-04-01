import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <>
            <header>
                <div className='navbar'>
                    <NavLink to="/" className='navbar__link'>Accueil</NavLink>
                    <NavLink to="/about" className='navbar__link'>A propos</NavLink>
                </div>
            </header>
        </>

    )
}

export default Header