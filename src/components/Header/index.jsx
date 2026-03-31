import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </>

    )
}

export default Header