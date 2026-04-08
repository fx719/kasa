import accomodations from '../../assets/data/logements.json'
import Banner from '../../components/Banner/index.jsx'
import homeBackgroundPicture from '../../assets/images/home/banner_background.webp'
import './Home.scss'

function Home() {
    return (<>
        <Banner backgroundImageUrl={homeBackgroundPicture} bannerTitle="Chez vous, partout et ailleurs" />
        <section className="accomodations">

            {accomodations.map((accomodation) => (
                <div key={accomodation.id} className='accomodation'><h2 className='accomodation__title'>{accomodation.title}</h2></div>
            ))}

        </section>

    </>)
}

export default Home