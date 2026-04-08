import Banner from '../../components/Banner/index.jsx'
import './About.scss'
import aboutBackgroundPicture from '../../assets/images/about/banner_background.webp'

function About() {
    return (<>
        <Banner backgroundImageUrl={aboutBackgroundPicture} bannerTitle={null} />
    </>)
}

export default About