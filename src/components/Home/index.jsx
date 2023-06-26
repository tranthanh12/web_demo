import React from 'react'
import Banner from '../Home/Banner'
import Whoweare from '../Home/WhoWeAre'
import WeOffer from '../Home/WeOffer'
import Portfolio from '../Home/Portfolio'
import About from '../Home/About'
import Offices from '../Home/Offices'

const index = () => {
    return (
        <div className='body'>
            <main>
                <Banner></Banner>
                <Whoweare></Whoweare>
                <WeOffer></WeOffer>
                <Portfolio></Portfolio>
                <About></About>
                <Offices></Offices>
            </main>
        </div>
    )
}

export default index