const API_KEY = "b50ce8df6217d8dfccb80577ee182bca";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMovie0: `/movie/524?api_key=${API_KEY}&language=en-US`,
    fetchMovie1: `/movie/9273?api_key=${API_KEY}&language=en-US`,
    fetchMovie2: `/movie/21032?api_key=${API_KEY}&language=en-US`,
    fetchMovie3: `/movie/9091?api_key=${API_KEY}&language=en-US`,
    fetchMovie4: `/movie/11517?api_key=${API_KEY}&language=en-US`,
    fetchMovie5: `/movie/4584?api_key=${API_KEY}&language=en-US`,
    fetchMovie6: `/movie/5?api_key=${API_KEY}&language=en-US`
}

export default requests;