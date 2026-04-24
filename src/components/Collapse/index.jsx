import './Collapse.scss'
import { useState } from 'react'

/**
 * Collapse component that displays content when clicked, and hides it again when clicked a second time.
 * The arrow is animated with a simple half-complete rotatation.
 * 
 * @component
 * @param {Object} props
 * @param {boolean} props.isMediumSized Normal width is 75% of parent element, medium width is 30%.
 * @param {boolean} props.contentIsParagraph
 * @param {boolean} props.contentIsList
 * @param {string} props.collapseTitle
 * @param {string | string[]} props.collapseContent   If contentIsParagraph, then content type is a string. 
 * If contentIsList, then it's an array of strings that you have to map on, to display each <li></li> corresponding element.
 * @returns {JSX.Element}
 */

function Collapse({ isInAGrid, contentIsParagraph, contentIsList, collapseTitle, collapseContent }) {

    //Collapse menu is closed on page's loading
    const [isOpen, setIsOpen] = useState(false)

    const handleCollapse = (e) => {
        setIsOpen(!isOpen)
        if (isOpen === false) {
            // if the replaced class doesn't exit, the classList.replace() function doesn't throw an error, so here it handles the 2 possible closed-Collapse classes
            e.currentTarget.classList.replace("collapse__header__arrow", "collapse__header__arrow--opening")
            e.currentTarget.classList.replace("collapse__header__arrow--closing", "collapse__header__arrow--opening")
        }
        if (isOpen === true) {
            e.currentTarget.classList.replace("collapse__header__arrow--opening", "collapse__header__arrow--closing")
        }
    }


    return (
        <div className='collapse' style={isInAGrid && { width: "90%" }}>
            <div className="collapse__header">
                <h2 className='collapse__header__title'>{collapseTitle}</h2>
                <i className="fa-solid fa-angle-up fa-2xl collapse__header__arrow" onClick={(e) => handleCollapse(e)}></i>
            </div>
            {contentIsParagraph && <p className={isOpen ? 'collapse__content__paragraph--opening' : 'collapse__content__paragraph--closing'}  >{collapseContent}</p>}
            {contentIsList && <ul className={isOpen ? 'collapse__content__list--opening' : 'collapse__content__list--closing'} >{collapseContent}</ul>}
        </div>
    )
}


export default Collapse