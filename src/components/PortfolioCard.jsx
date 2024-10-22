

export default function PortfolioCard ({site}) {
    const {siteImg, siteTitle, siteDescription} = site
    return (
        <>
            <img src={siteImg} alt="" style={{width: "80%", height: "50%"}}/>
            <div id="portfolio-card-content-inner">
                <p id="content-title">{siteTitle}</p>
                <hr></hr>
                <p id="content-description">{siteDescription}</p>
            </div>
        </>
    )
}