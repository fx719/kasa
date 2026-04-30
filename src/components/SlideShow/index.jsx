import { useState } from "react"
import './SlideShow.scss'
import { useOutletContext } from "react-router-dom"


function SlideShow({ currentBackgroundImg, numberOfPictures }) {



    const [currentPicture, setCurrentPicture] = useState(1)
    const [isMobileWidth, setIsMobileWidth] = useOutletContext()


    const handlePictureNav = (e) => {
        let buttonClass = e.currentTarget.attributes.class.value

        if (buttonClass.endsWith("left")) {
            if (currentPicture <= 1) {
                setCurrentPicture(currentPicture => currentPicture = numberOfPictures)
            } else {
                setCurrentPicture(currentPicture => currentPicture - 1)
            }
        }

        if (buttonClass.endsWith("right")) {
            if (currentPicture >= numberOfPictures) {
                setCurrentPicture(currentPicture => currentPicture = 1)
            } else {
                setCurrentPicture(currentPicture => currentPicture + 1)
            }
        }
    }





    if (numberOfPictures > 1) {
        if (isMobileWidth) {
            return (
                <div className="slideShow" style={{ backgroundImage: `url(${currentBackgroundImg[currentPicture - 1]})` }}>
                    <div className="slideShow__nav">
                        <button className="slideShow__nav--left" onClick={(e) => handlePictureNav(e)}> <i className="fa-solid fa-angle-left"></i> </button>
                        <button className="slideShow__nav--right" onClick={(e) => handlePictureNav(e)}>  <i className="fa-solid fa-angle-right"></i> </button>
                    </div>
                </div>
            )
        }

        return (
            <div className="slideShow" style={{ backgroundImage: `url(${currentBackgroundImg[currentPicture - 1]})` }}>
                <div className="slideShow__nav">
                    <button className="slideShow__nav--left" onClick={(e) => handlePictureNav(e)}> <i className="fa-solid fa-angle-left fa-2xl"></i> </button>
                    <button className="slideShow__nav--right" onClick={(e) => handlePictureNav(e)}>  <i className="fa-solid fa-angle-right fa-2xl"></i> </button>
                </div>
                <div className="slideShow__currentPicture">{currentPicture}/{numberOfPictures}</div>
            </div>
        )

    }
    else {
        return (
            <div className="slideShow" style={{ backgroundImage: `url(${currentBackgroundImg[0]})` }}>
            </div>
        )
    }


}

export default SlideShow