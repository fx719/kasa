import './Banner.scss'


function Banner({ backgroundImageUrl, bannerTitle }) {
    return (<>
        <div className='banner' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            {bannerTitle && <h1 className='banner__title'>{bannerTitle}</h1>}
        </div>
    </>)
}


export default Banner