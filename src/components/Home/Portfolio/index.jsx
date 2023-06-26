import React from 'react'

const index = () => {
    return (
        <>
            <div className="section section--third" bis_skin_checked={1}>
                <div className="container" bis_skin_checked={1}>
                    <div className="section-heading section-heading--black" bis_skin_checked={1}>Portfolio</div>
                </div>
                <div className="section--third__content" style={{ backgroundImage: 'url(https://ntq.com.vn/media/PgfoUlT0SKpPtJ4nAXlQ)' }} bis_skin_checked={1}>
                    <div className="container" bis_skin_checked={1}>
                        <div className="subheading" bis_skin_checked={1}>
                            <div className="subheading__value" bis_skin_checked={1}>600++ </div>
                            <div className="subheading__display-text" bis_skin_checked={1}>
                                <p>Successful</p>
                                <p>Projects</p>
                            </div>
                        </div><a className="button button--primary" href="https://ntq.com.vn/portfolio/" bis_skin_checked={1}>
                            All Case Studies </a>
                    </div>
                </div>
                <div className="angle-backdrop angle-backdrop--bottom" bis_skin_checked={1}><svg preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="100,100 0,100 0,0 100,99" opacity={1} />
                </svg></div>
            </div>
        </>
    )
}

export default index