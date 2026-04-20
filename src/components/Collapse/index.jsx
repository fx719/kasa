import './Collapse.scss'
import { useState, useEffect } from 'react'

function Collapse({ collapseTitle, collapseContent }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleCollapse = (e) => {
        setIsOpen(!isOpen)
        if (isOpen === false) {
            e.currentTarget.classList.replace("collapse__header__arrow", "collapse__header__arrow--opening")
            e.currentTarget.classList.replace("collapse__header__arrow--closing", "collapse__header__arrow--opening")
        }
        if (isOpen === true) {
            e.currentTarget.classList.replace("collapse__header__arrow--opening", "collapse__header__arrow--closing")
        }
    }


    return (<div className='collapse'>
        <div className="collapse__header">
            <h2 className='collapse__header__title'>{collapseTitle}</h2>
            <i className="fa-solid fa-angle-up fa-2xl collapse__header__arrow" onClick={(e) => handleCollapse(e)}></i>
        </div>
        <p className='collapse__content' style={isOpen ? { display: "block" } : { display: "none" }} >{collapseContent}</p>
    </div>)
}


export default Collapse