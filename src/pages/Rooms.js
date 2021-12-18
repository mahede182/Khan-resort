import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Bannner'
import {Link} from 'react-router-dom'
import RoomContainer from '../component/RoomContainer'

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to="/" className="btn btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    )
}
export default Rooms