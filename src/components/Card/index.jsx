import './Card.scss'


function Card({ backgroundPath, cardTitle }) {
    return (<div className='card' style={{ backgroundImage: `url(${backgroundPath})` }}>
        <h2 className='card__title'>{cardTitle}</h2>
    </div>)
}

export default Card