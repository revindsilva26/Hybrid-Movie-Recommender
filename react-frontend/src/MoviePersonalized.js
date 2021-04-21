import React, { useState , useEffect} from 'react'
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import requests from './request';
import './Movies.css';
import { Link } from 'react-router-dom';
import Recommendation from "./Recommendation";


const base_url = "https://image.tmdb.org/t/p/original/";

function MoviePersonalized( { tmdbId, movieId, fetchUrl, isLargeRow } ) {
   // console.log(tmdbId,movieId,fetchUrl)
    //console.log("in movies")
    // console.log(fetchUrl)
    // console.log(params)

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");
    //some problem here as it seems to refetch it again and movies becomes undefined 
    let name, id,backdrop, poster, rating = 5;

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

    

    // const handleClick = (movie) => {
    //     console.log("clicked", movie);
    //     console.log(movie);
    //     if(trailerUrl){
    //         setTrailerUrl("");
    //     }else{
    //         movieTrailer(movie || "")
    //         .then(url => {
    //             console.log(url);
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             console.log(urlParams);
    //             setTrailerUrl(urlParams.get("v"));
    //         })
    //         .catch(error => console.log(error));
    //     }
    // };

    // const handleClick = (movie) => {
    //     <form id = {movie[0]}>
    //         <input type="text" name = {movie[0]}/>
    //     </form>
    //     const url = "http://localhost:5000/generator";
    //     fetch(url, {
    //         method:"POST",
    //         body: new FormData(document.getElementById(movie[1]))
    //     })
    //     .then(
    //         response => response.text()
    //     );
    // }

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
            <h2>Recommendation</h2>

            <h3 style="color:black;">{name}</h3>

            <div className="row__posters">
                {/* row posters */}
                
                {/* 
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))} */}




                    {/* <input name = "movieName" value={name} placeholder={movies[0]} enctype ="text/plain"/> */}
                    {/* <input name = "movie" value = {movieId} placeholder = "Movie Name" enctype ="text/plain"/> */}
                    <input name = "rating"  placeholder = "Movie Rating" enctype ="text/plain"/>
                    
                    <img 
                        id = {movies[1]}
                        key={movies[1]}
                        // onClick={() => handleClick(movies)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        // src={`${base_url}${isLargeRow ? movies[2] : movies[3]}`} 
                        src={`${base_url}${movies[2]}`}
                        alt={movies[0]}
                    />

                    {/* <img 
                        id = {id}
                        key={id}
                        // onClick={() => handleClick(movies)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        // src={`${base_url}${isLargeRow ? movies[2] : movies[3]}`} 
                        src={`${base_url}${backdrop}`}
                        alt={name}
                    />           */}

                    {/* <img 
                        key={movies.data.id}
                        onClick={() => handleClick(movies.data.title)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        // src={`${base_url}${isLargeRow ? movies.data.poster_path : movies.data.backdrop_path}`} 
                        src={`${base_url}${movies.data.poster_path}`}
                        alt={movies.data.title}
                    /> */}

            </div> 
            {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default MoviePersonalized;
