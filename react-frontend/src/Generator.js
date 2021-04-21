import React from 'react';
import './Generator.css';
// import { Link, useHistory } from "react-router-dom"; 
import Movie from './Movie.js';
import requests from './request';
// import requests from './request';
import url from './Url';

function Generator() {
    // const history = useHistory();
    // const [ movies , setMovies] = useState([]);
    
    
    // useEffect(() => {
	// 	var tmdbMap ={1  : 862,   2  : 8844,  3  : 15602,
	// 		4  : 31357, 5  : 11862, 6  : 949,
	// 		7  : 11860, 8  : 45325, 9  : 9091,
	// 		10 : 710,   11 : 9087,  12 : 12110,
	// 		13 : 21032, 14 : 10858, 15 : 1408,
	// 		16 : 524,   17 : 4584,  18 : 5,
	// 		19 : 9273,  20 : 11517};
						
		function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
		}

    //     function generate(){
    //         for( var i = 1; i <= 5; i++)
    //         {
    //             var randomMovie = randomInteger(1,20);
    //             movies.push(tmdbMap[randomMovie]);
    //             setMovies(movies);
    //         }
	// 		console.log(movies);
    //     }
    //     generate();
    // }, [movies]);

	// const movieId = [16, 1, 10, 9, 6, 17, 18] 
	const movieId = ['1', '69644', '5218', '52722', '546', '109487', '25', '145', '150', '153', '198', '120799']
	const tmdb = ['862', '8355', '425', '559', '9607', '157336', '451', '9737', '568', '414', '281', '87101']
	let randomList = []
	for(var i = 0; i < 12; i++)
	{
		randomList.push(i);
	}
	console.log(randomList);

    return (
        <div>
			<h1>Find Movie Recommendations for yourself by rating movies.</h1>
					
					{/* {tmdb.map((tmdbId,index)=>{
						{
							console.log(tmdbId, movieId,fetchUrl);
							<Movie tmdbId = {tmdbId} movieId={movieId[index]} fetchUrl = {'/movie/{movieId}{request.fetchMovie}'} />
							console.log(tmdbId, movieId);
						}
					})} */}

					{/* <Movie tmdbId = {tmdb[0]} movieId={movieId[0]} fetchUrl={requests.fetchMovie0}  isLargeRow={true}/>
					<Movie tmdbId = {tmdb[1]} movieId={movieId[1]} fetchUrl={requests.fetchMovie1}  isLargeRow={true}/>
					<Movie tmdbId = {tmdb[2]} movieId={movieId[2]} fetchUrl={requests.fetchMovie2}  isLargeRow={true}/>
					<Movie tmdbId = {tmdb[3]} movieId={movieId[3]} fetchUrl={requests.fetchMovie3}  isLargeRow={true}/>
					<Movie tmdbId = {tmdb[4]} movieId={movieId[4]} fetchUrl={requests.fetchMovie4}  isLargeRow={true}/>
					<Movie tmdbId = {tmdb[5]} movieId={movieId[5]} fetchUrl={requests.fetchMovie5}  isLargeRow={true}/>
					<Movie tmdbId = {tmdb[6]} movieId={movieId[6]} fetchUrl={requests.fetchMovie6}  isLargeRow={true}/> */}

					{/* <Movie tmdbId = {tmdb[0]} movieId={movieId[0]} fetchUrl={url(tmdb[0])}  isLargeRow={true}/> */}
					{/* <Movie tmdbId = {tmdb[1]} movieId={movieId[1]} fetchUrl={url(tmdb[1])}  isLargeRow={true}/> */}
					{randomList.map(ele =>  (
						<Movie tmdbId = {tmdb[ele]} movieId={movieId[ele]} fetchUrl={url(tmdb[ele])} isLargeRow={true}/>	
					))}
        </div>
    )
}

export default Generator;
