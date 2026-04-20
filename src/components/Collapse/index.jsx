import './Collapse.scss'

function Collapse({ collapseTitle, collapseContent }) {
    return (<div className='collapse'>
        <div className="collapse__header">
            <h2 className='collapse__header__title'>{collapseTitle}</h2>
            <i className="collapse__header__arrow fa-solid fa-angle-up fa-2xl" style={{ color: "rgb(255, 255, 255)" }}></i>
        </div>
        <p className='collapse__content'>{collapseContent}</p>


    </div>)
}


export default Collapse