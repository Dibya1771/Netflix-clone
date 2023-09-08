import React from 'react'
import Row from '../components/Row/Row'
import Banner from '../components/Banner/Banner'
import Nav from '../components/Nav/Nav'
// import api from '../api/api'

const Show = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Row title="Netflix Originals" param="originals" />
            <Row title="Trending Now" param="trending" />
            <Row title="Now Playing" param="now_playing" />
            <Row title="popular" param="popular" />
            <Row title="Top Rated" param="top_rated" />
            <Row title="Upcoming" param="upcoming" />
        </div>
    )
}

export default Show


