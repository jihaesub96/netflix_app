import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from "../api/requests";

function MainPage() {
  return (
    <div>
        <Banner />
        
        <Row title="NETFLIX ORIGINALS" id="NO" fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow/>
        <Row title="Trending" id="TN" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
        <Row title="Animation Movie" id="AM" fetchUrl={requests.fetchAnimationMovies}/>
        <Row title="Family Movie" id="FM" fetchUrl={requests.fetchFamilyMovies} />
        <Row title="Adventure Movie" id="AM" fetchUrl={requests.fetchAdventureMovies} />
        <Row title="ScienceFiction Movie" id="RM" fetchUrl={requests.fetchScienceFictionMovies} />
        <Row title="Action" id="AC" fetchUrl={requests.fetchAction} />
    </div>
  )
}

export default MainPage