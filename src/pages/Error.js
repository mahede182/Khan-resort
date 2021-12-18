import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../component/Hero'
import Banner from '../component/Bannner'
const Error = () => {
    return (
        <Hero>
            <Banner title="Error 404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}
export default Error