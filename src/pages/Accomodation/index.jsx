import accomodations from '../../assets/data/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import './Accomodation.scss'

function Accomodation() {
    try {
        const { accomodationId } = useParams()
        const [visitedAccomodation] = accomodations.filter((accomodation) => accomodation.id === accomodationId)
        const accomodationPictures = visitedAccomodation.pictures
        const accomodationTags = visitedAccomodation.tags

        let accomodationElementId = 0
        if (visitedAccomodation === undefined) {
            return <Navigate to="*" />
        } else {
            return (<div className='visitedAccomodation'>
                <div className="visitedAccomodation__carousel">
                    {accomodationPictures.map((accomodationPicture) => (
                        <img key={accomodationElementId++} src={accomodationPicture} className='visitedAccomodation__carousel__picture' />
                    ))}
                </div>
                <div className="visitedAccomodation__introduction">
                    <h1 className='visitedAccomodation__title' >{visitedAccomodation.title}</h1>
                    <p className='visitedAccomodation__location'>{visitedAccomodation.location}</p>
                    <div className="visitedAccomodation__tags">
                        {accomodationTags.map((tag) => (
                            <p key={accomodationElementId++} className='visitedAccomodation__tags__tag'>{tag}</p>
                        ))}
                    </div>
                    <div className="visitedAccomodation__host">
                        <p className='visitedAccomodation__host__name'>{visitedAccomodation.host.name}</p>
                        <img className='visitedAccomodation_host__avatar' src={visitedAccomodation.host.picture} alt={`avatar de ${visitedAccomodation.host.name}`} />
                    </div>
                    <div className="visitedAccomodation__rating">
                        <p>Insérer nombre d'étoiles correspondant à {visitedAccomodation.rating}</p>
                    </div>
                </div>
            </div>)
        }
    } catch (error) {
        console.error(error)
    }


}

export default Accomodation