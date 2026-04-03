import accomodations from '../../assets/data/logements.json'
import './Home.scss'

function Home() {
    return (<>
        <div className='banner'>
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
        <section className="accomodations">

            {accomodations.map((accomodation) => (
                <div key={accomodation.id} className='accomodation'><h2 className='accomodation__title'>{accomodation.title}</h2></div>
            ))}

        </section>

    </>)
}

export default Home