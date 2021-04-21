import React, { useState , useEffect} from 'react';
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import url from './Url';
import './WatchTrailer.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function WatchTrailer({tmdbId}) {
    const fetchUrl = url(tmdbId);
    console.log(tmdbId, fetchUrl)
    console.log(fetchUrl)
    const [movie, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
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

    return (
        <div className="row">
            <h2>{movie[0]}</h2>

            <div className="row__posters">

                <img 
                    id = {movie[1]}
                    key = {movie[1]}
                    onClick={() => handleClick(movie[0])}
                    className="row__posterLarge"
                    // src={`${base_url}${isLargeRow ? movies[2] : movies[3]}`} 
                    src={`${base_url}${movie[2]}`}
                    alt={movie[0]}
                />

            </div> 
            {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default WatchTrailer;
