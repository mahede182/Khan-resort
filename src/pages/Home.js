import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Bannner'
import { Link } from 'react-router-dom'
import Services from '../component/Services'
const Home = () => {
    return (
        <>
        <Hero>
            <Banner
             title="luxurios rooms"
             subtitle="deluxe rooms starting at $299">
                 <Link to='/rooms' className="btn-primary">
                     our rooms
                 </Link>
            </Banner>
        </Hero>
        <Services />
        </>
    )
}
export default Home
