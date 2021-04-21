import React from 'react';
import './Generator.css';
import { Link, useHistory } from "react-router-dom"; 
import Movie from './Movie.js';
import requests from './request';
// import requests from './request';
import MoviePersonalized from './MoviePersonalized.js';

function Personalized() {
    
	const movieId = ['16', '19', '13', '9', '20', '17', '18']
	const tmdb = ['524', '9273', '21032', '9091', '11517', '4584', '5']

	function redirect(){
        window.location.href = "recommendation";
    }

	let recommendedMovies ;
    if(window.token)
    {
        recommendedMovies = {movies: window.token};
    }

    return (
        <div>
			<h1>Recommendation</h1>
					
					<form  action = "http://localhost:5000/personalized" method = "POST" onSubmit="redirect();">

						<MoviePersonalized tmdbId = {tmdb[0]} movieId={movieId[0]} fetchUrl={requests.fetchMovie0}  isLargeRow={false}/>
						<MoviePersonalized tmdbId = {tmdb[1]} movieId={movieId[1]} fetchUrl={requests.fetchMovie1}  isLargeRow={false}/>
						<MoviePersonalized tmdbId = {tmdb[2]} movieId={movieId[2]} fetchUrl={requests.fetchMovie2}  isLargeRow={false}/>
						<MoviePersonalized tmdbId = {tmdb[3]} movieId={movieId[3]} fetchUrl={requests.fetchMovie3}  isLargeRow={false}/>
						<MoviePersonalized tmdbId = {tmdb[4]} movieId={movieId[4]} fetchUrl={requests.fetchMovie4}  isLargeRow={false}/>
						<MoviePersonalized tmdbId = {tmdb[5]} movieId={movieId[5]} fetchUrl={requests.fetchMovie5}  isLargeRow={false}/>
						<MoviePersonalized tmdbId = {tmdb[6]} movieId={movieId[6]} fetchUrl={requests.fetchMovie6}  isLargeRow={false}/>					

						<button type = "submit" value="submit">Submit</button>
					</form>

					<Link to="/recommendation" params={recommendedMovies}>
                    	<button>RecommendedMovies</button>
                	</Link>

        </div>
    )
}

export default Personalized;
