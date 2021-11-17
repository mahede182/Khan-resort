import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Bannner'
import {Link} from 'react-router-dom'
const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to="/" className="btn btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}
export default Rooms