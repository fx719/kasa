import accomodations from '../../assets/data/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Accomodation.scss'
import Collapse from '../../components/Collapse/index.jsx'
import SlideShow from '../../components/SlideShow/index.jsx'
import Ratings from '../../components/Ratings/index.jsx'

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

                <SlideShow currentBackgroundImg={accomodationPictures} numberOfPictures={accomodationPictures.length} />
                <section className="presentation">
                    <div className="visitedAccomodation__introductionAndTags">
                        <div className="visitedAccomodation__introduction">
                            <h1 className='visitedAccomodation__introduction__title' >{visitedAccomodation.title}</h1>
                            <p className='visitedAccomodation__introduction__location'>{visitedAccomodation.location}</p>
                        </div>
                        <div className="visitedAccomodation__tags">
                            {accomodationTags.map((tag) => (
                                <p key={accomodationElementId++} className='visitedAccomodation__tags__tag'>{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className="visitedAccomodation__hostAndRatings">
                        <div className="visitedAccomodation__host">
                            <p className='visitedAccomodation__host__name'>{visitedAccomodation.host.name}</p>
                            <img className='visitedAccomodation__host__avatar' src={visitedAccomodation.host.picture} alt={`avatar de ${visitedAccomodation.host.name}`} />
                        </div>
                        <div className="visitedAccomodation__ratings">
                            <Ratings rating={visitedAccomodation.rating} />
                        </div>
                    </div>
                    <div className="visitedAccomodation__description">
                        <Collapse isCollapseSibling contentIsParagraph collapseTitle="Description" collapseContent={visitedAccomodation.description} />
                    </div>
                    <div className="visitedAccomodation__equipment">
                        <Collapse isCollapseSibling contentIsList collapseTitle="Equipements" collapseContent={visitedAccomodation.equipments.map((equipment) => (<li key={accomodationElementId++}>{equipment}</li>))} />
                    </div>
                </section>

            </div>)
        }
    } catch (error) {
        console.error(error)
    }


}

export default Accomodation