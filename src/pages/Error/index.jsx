import './Error.scss'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div className='notFoundError'>
            <h1 className='notFoundError__title'>404</h1>
            <p className='notFoundError__text'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className='notFoundError__link' to='/'>Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Error