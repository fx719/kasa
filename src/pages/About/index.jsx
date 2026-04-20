import Banner from '../../components/Banner/index.jsx'
import './About.scss'
import aboutBackgroundPicture from '../../assets/images/about/banner_background.webp'
import Collapse from '../../components/Collapse/index.jsx'

function About() {
    return (<>
        <Banner backgroundImageUrl={aboutBackgroundPicture} bannerTitle={null} />
        <Collapse collapseTitle="Fiabilité" collapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" />
    </>)
}

export default About