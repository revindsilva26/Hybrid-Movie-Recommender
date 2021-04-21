import React from "react";
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from "./Banner.js";
import Nav from './Nav.js';

function Home() {
  return (
    <div className="Home">
      <Nav /> 
      <Banner />

      {/* <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginal}
               isLargeRow
       /> */}
       
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default Home;
