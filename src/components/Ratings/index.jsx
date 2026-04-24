import './Ratings.scss'

function Ratings({ rating }) {
    try {

        const emptyStarsQuantity = 5 - parseInt(rating)
        let starId = 1

        return (
            <div className="ratings">
                {Array.from(Array(parseInt(rating))).map(() => (<i key={starId++} className="fa-solid fa-star fa-xl" style={{ color: "#ff6060" }}></i>))}
                {Array.from(Array(parseInt(emptyStarsQuantity))).map(() => (<i key={starId++} className="fa-solid fa-star fa-xl" style={{ color: "#e3e3e3" }}></i>))}
            </div>
        )

    } catch (error) {
        console.error(error)
    }

}

export default Ratings