import accomodations from '../../assets/data/logements.json'
import Banner from '../../components/Banner/index.jsx'
import homeBackgroundPicture from '../../assets/images/home/banner_background.webp'
import './Home.scss'
import { NavLink } from 'react-router-dom'
import Card from '../../components/Card/index.jsx'

function Home() {
    return (<>
        <Banner backgroundImageUrl={homeBackgroundPicture} bannerTitle="Chez vous, partout et ailleurs" />
        <section className="accomodations">

            {accomodations.map((accomodation) => (
                <NavLink key={accomodation.id} to={`/accomodation/${accomodation.id}`}>
                    <Card backgroundPath={accomodation.cover} cardTitle={accomodation.title} />
                </NavLink>
            ))}

        </section>

    </>)
}

export default Home