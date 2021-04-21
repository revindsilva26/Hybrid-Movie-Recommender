// This file is related to the movies which needs to be served 
// in the case of similar movies.

import React, { useState , useEffect} from 'react'
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import requests from './request';
import './Movies.css';
import { Link } from 'react-router-dom';
import Recommendation from "./Recommendation";


const base_url = "https://image.tmdb.org/t/p/original/";

function Movie( { tmdbId, movieId, fetchUrl, isLargeRow } ) {
    // console.log(tmdbId,movieId,fetchUrl)
    //console.log("in movies")
    console.log(fetchUrl)
    // console.log(params)
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");
    //some problem here as it seems to refetch it again and movies becomes undefined 
    let name, id, backdrop, poster;

    useEffect(() => {
        setLoading(true);
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data);
            name = request.data.title;
            id = request.data.id;
            backdrop = request.data.backdrop_path;
            poster = request.data.poster_path;
            //console.log(request);
            // setMovies([{name : name, id:id, backdrop: backdrop, poster : poster }]);
            setMovies([name, id, backdrop, poster])
            return request;
        }
        fetchData()
        .finally(()=>{
            setLoading(false);
        });
        
    }, []);

    //console.table(movies);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    function redirect(){
        window.location.href = "recommendation";
    }

    

    const handleClick = (movie) => {
        console.log("clicked", movie);
        console.log(movie);
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie || "")
            .then(url => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(error => console.log(error));
        }
    };

    console.log(movies)

    if(loading){
        return <p>Data is loading...</p>
    }

    let movieDetails = {
        name : movies[0],
    }
        
    let recommendedMovies = "";
    if(window.token)
    {
        recommendedMovies = window.token;
    }


    return (
        <div className="row">

            <h3 > {movies[0]}</h3>
                
                <div className="movie__display">
                    <form action = "http://localhost:5000/generator" method = "POST" onSubmit="redirect();">
                        <input name = "movie" value={movieId} placeholder={movies[0]} enctype ="text/plain" type="hidden"/>
                        <input name = "rating"  placeholder = "Enter Movie Rating" enctype ="text/plain" />
                        <div>
                            <img 
                                id = {movies[1]}
                                key={movies[1]}
                                // onClick={() => handleClick(movies[0])}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                //src={`${base_url}${isLargeRow ? movies[2] : movies[3]}`} 
                                src={`${base_url}${movies[2]}`}
                                alt={movies[0]}
                            />
                        </div>
                        
                        <button type = "submit" value="submit" className="movie__button">Submit</button>
                    </form>
                </div>
                
                <div className="movie__display">
                    <button onClick={() => handleClick(movies[0])} className="movie__button">Watch Trailer</button>
                </div>

                <Link to="/recommendation" params={recommendedMovies}>
                    <button className = "movie__button">recommendedMovies</button>
                </Link>
                
            {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Movie;



{/* <img 
    key={movies.data.id}
    onClick={() => handleClick(movies.data.title)}
    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
    // src={`${base_url}${isLargeRow ? movies.data.poster_path : movies.data.backdrop_path}`} 
    src={`${base_url}${movies.data.poster_path}`}
    alt={movies.data.title}
/> */}
