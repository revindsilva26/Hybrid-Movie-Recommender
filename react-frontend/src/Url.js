const API_KEY = "b50ce8df6217d8dfccb80577ee182bca";

function url(mid){
    return `/movie/${mid}?api_key=${API_KEY}&language=en-US`;
}

export default url;