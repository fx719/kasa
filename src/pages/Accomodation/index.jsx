import accomodations from '../../assets/data/logements.json'
import { useParams, Navigate } from 'react-router-dom'

function Accomodation() {
    try {
        let { accomodationId } = useParams()
        let [visitedAccomodation] = accomodations.filter((accomodation) => accomodation.id === accomodationId)
        if (visitedAccomodation === undefined) {
            return <Navigate to="*" />
        } else {
            return (<>
                <h1>{visitedAccomodation.title}</h1>
            </>)
        }
    } catch (error) {
        console.error(error)
    }


}

export default Accomodation