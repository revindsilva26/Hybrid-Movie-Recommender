import React, { useState , useEffect} from 'react'
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import requests from './request';
import './Movies.css';
import { Link } from 'react-router-dom';
import MoviePersonalized from './MoviePersonalized';
import url from './Url';
import WatchTrailer from './WatchTrailer';

const base_url = "https://image.tmdb.org/t/p/original/";



function Recommendation({movies,params}) {
    console.log(movies, params)
    let movieList = movies.split(" ");
    // console.log(props)
    // const API_KEY = "b50ce8df6217d8dfccb80577ee182bca";
    // let isLargeRow = true;
    // let fetchUrl = `/movie/${movieList[0]}?api_key=${API_KEY}&language=en-US`;
    // let firstMovie = movieList[0];

    // console.log(fetchUrl)
    // const [loading, setLoading] = useState(false);
    // const [movies, setMovies] = useState([]);
    // const [trailerUrl , setTrailerUrl] = useState("");
    // //some problem here as it seems to refetch it again and movies becomes undefined 
    // let name, id,backdrop, poster;

    // useEffect(() => {
    //     setLoading(true);
    //     async function fetchData(){
    //         const request = await axios.get(fetchUrl);
    //         console.log(request.data);
    //         name = request.data.title;
    //         id = request.data.id;
    //         backdrop = request.data.backdrop_path;
    //         poster = request.data.poster_path;
    //         //console.log(request);
    //         // setMovies([{name : name, id:id, backdrop: backdrop, poster : poster }]);
    //         setMovies([name, id, backdrop, poster ])
    //         return request;
    //     }
    //     fetchData()
    //     .finally(()=>{
    //         setLoading(false);
    //     });
        
    // }, []);

    console.log(movieList);

    // const opts = {
    //     height:"390",
    //     width:"100%",
    //     playerVars:{
    //         autoplay:1,
    //     },
    // };

    // const handleClick = (movie) => {
    // console.log("clicked", movie);
    // console.log(movie);
    // if(trailerUrl){
    //     setTrailerUrl("");
    // }else{
    //     movieTrailer(movie || "")
    //     .then(url => {
    //         console.log(url);
    //         const urlParams = new URLSearchParams(new URL(url).search);
    //         console.log(urlParams);
    //         setTrailerUrl(urlParams.get("v"));
    //     })
    //     .catch(error => console.log(error));
    // }
    // // };
    // let movies;
    // if(window.token)
    // {
    //     movies = window.token;
    // }

    return (
        <div className="row">

            {/* 
            <WatchTrailer tmdbId={movieList[0]} />
            <WatchTrailer tmdbId={movieList[1]}/> */}

            {
                movieList.map(item => (
                    <WatchTrailer tmdbId = {item}/>
                ))
            }
           
               
            {/* <MoviePersonalized tmdbId = {movies[0]} movieId={movies[0]} fetchUrl={requests.fetchMovie1}  isLargeRow={false}/> */}


            {/* <div className="row__posters"> */}
                {/* row posters */}
                

                {/* <img 
                    key={movies.data.id}
                    onClick={() => handleClick(movies.data.title)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    // src={`${base_url}${isLargeRow ? movies.data.poster_path : movies.data.backdrop_path}`} 
                    src={`${base_url}${movies.data.poster_path}`}
                    alt={movies.data.title}
                />

            </div> 
             */}
            {/* {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}  */}
            
        </div>
    )
}


export default Recommendation;
