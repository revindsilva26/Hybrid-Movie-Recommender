import React, { useState , useEffect} from 'react'
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row( { title, fetchUrl,isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");
    //some problem here as it seems to refetch it again and movies becomes undefined 
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            //console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    //console.table(movies);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick = (movie) => {
        console.log("clicked", movie);
        console.log(movie?.name);
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.title || "")
            .then(url => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(error => console.log(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* row posters */}

                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}

                    />
                ))}

            </div> 
            {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row;
