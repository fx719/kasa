import accomodations from '../../assets/data/logements.json'
import Banner from '../../components/Banner/index.jsx'
import homeBackgroundPicture from '../../assets/images/home/banner_background.webp'
import './Home.scss'
import { NavLink } from 'react-router-dom'

function Home() {
    return (<>
        <Banner backgroundImageUrl={homeBackgroundPicture} bannerTitle="Chez vous, partout et ailleurs" />
        <section className="accomodations">

            {accomodations.map((accomodation) => (
                <NavLink key={accomodation.id} to={`/accomodation/${accomodation.id}`}><div className='accomodation' style={{ backgroundImage: `url(${accomodation.cover})` }}><h2 className='accomodation__title'>{accomodation.title}</h2></div></NavLink>
            ))}

        </section>

    </>)
}

export default Home