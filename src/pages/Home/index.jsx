import accomodations from '../../assets/data/logements.json'
import './Home.scss'

function Home() {
    return (<>
        <h1>Liste des logements disponibles</h1>
        <ul>
            {accomodations.map((accomodation) => (
                <li key={accomodation.id}>{accomodation.title}</li>
            ))}
        </ul>
    </>)
}

export default Home