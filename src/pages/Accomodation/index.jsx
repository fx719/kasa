import accomodations from '../../assets/data/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import './Accomodation.scss'
import Collapse from '../../components/Collapse/index.jsx'

function Accomodation() {
    try {
        const { accomodationId } = useParams()
        const [visitedAccomodation] = accomodations.filter((accomodation) => accomodation.id === accomodationId)


        let accomodationElementId = 0
        if (visitedAccomodation === undefined) {
            return <Navigate to="*" />
        } else {
            const accomodationPictures = visitedAccomodation.pictures
            const accomodationTags = visitedAccomodation.tags
            return (<div className='visitedAccomodation'>
                <div className="visitedAccomodation__carousel">
                    {accomodationPictures.map((accomodationPicture) => (
                        <img key={accomodationElementId++} src={accomodationPicture} className='visitedAccomodation__carousel__picture' />
                    ))}
                </div>
                <div className="visitedAccomodation__introduction">
                    <h1 className='visitedAccomodation__title' >{visitedAccomodation.title}</h1>
                    <p className='visitedAccomodation__location'>{visitedAccomodation.location}</p>
                </div>
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
                <div className="visitedAccomodation__description">
                    <Collapse isMediumSized contentIsParagraph collapseTitle="Description" collapseContent={visitedAccomodation.description} />
                </div>
                <div className="visitedAccomodation__equipment">
                    <Collapse isMediumSized contentIsList collapseTitle="Equipements" collapseContent={visitedAccomodation.equipments.map((equipment) => (<li key={accomodationElementId++}>{equipment}</li>))} />
                </div>
            </div>)
        }
    } catch (error) {
        console.error(error)
    }


}

export default Accomodation