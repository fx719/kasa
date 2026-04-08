import accomodations from '../../assets/data/logements.json'
import { useParams } from 'react-router-dom'

function Accomodation() {
    let { accomodationId } = useParams()
    let [visitedAccomodation] = accomodations.filter((accomodation) => accomodation.id === accomodationId)
    return <h1>{visitedAccomodation.title}</h1>

}

export default Accomodation